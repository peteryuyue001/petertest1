#!/usr/bin/env bash
# ============================================================
# jsDelivr CDN 缓存刷新脚本（delta-industry.com.cn）
# 用途：当同名 PDF / 静态资源被更新后，强制 jsDelivr 重新回源拉取
# 背景：jsDelivr 默认缓存约 12 小时；新文件名无需 purge，仅"同名覆盖"时需要
#
# 用法：
#   bash tools/purge-cdn.sh docs/pipe-seals/xxx.pdf
#   bash tools/purge-cdn.sh docs/klozure/a.pdf docs/hose/b.pdf   # 一次多个
#   bash tools/purge-cdn.sh --all-pdfs                            # 刷新 docs 下全部 PDF
# ============================================================
set -euo pipefail

REPO="peteryuyue001/petertest1@main"
BASE="https://purge.jsdelivr.net/gh/${REPO}/"

purge_one() {
  local path="$1"
  local enc
  enc=$(python3 -c "import urllib.parse,sys;print(urllib.parse.quote(sys.argv[1],safe='/'))" "$path")
  echo "→ 刷新: $path"
  curl -sS --max-time 30 "${BASE}${enc}" | python3 -c "import sys,json
try:
    d=json.load(sys.stdin)
    print('   状态:', d.get('status','unknown'), '| 资源:', d.get('id','')[:90])
except Exception:
    print('   返回非 JSON，可能已刷新或路径有误')"
}

if [ "${1:-}" = "--all-pdfs" ]; then
  if [ ! -d docs ]; then echo "未找到 docs/ 目录"; exit 1; fi
  find docs -type f -name "*.pdf" | while read -r f; do purge_one "$f"; done
  echo "全部 PDF 刷新请求已提交。"
  exit 0
fi

if [ "$#" -eq 0 ]; then
  echo "用法: bash tools/purge-cdn.sh <相对路径> [更多路径...]"
  echo "示例: bash tools/purge-cdn.sh docs/pipe-seals/LINK-SEAL.pdf"
  exit 1
fi

for p in "$@"; do purge_one "$p"; done
echo "完成。jsDelivr 全球节点通常数分钟内生效。"
