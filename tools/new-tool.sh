#!/data/data/com.termux/files/usr/bin/bash

if [ -z "$1" ]; then
    echo ""
    echo "Usage:"
    echo "bash new-tool.sh tool-name"
    exit 1
fi

TOOL="$1"

TITLE=$(echo "$TOOL" | tr '-' ' ' | sed 's/\b\(.\)/\u\1/g')

if [ -d "$TOOL" ]; then
    echo ""
    echo "Tool '$TOOL' already exists."
    exit 1
fi

mkdir "$TOOL"

cp _template/index.html "$TOOL/"
cp _template/style.css "$TOOL/"
cp _template/script.js "$TOOL/"

INDEX="$TOOL/index.html"

sed -i "s|Template Calculator|$TITLE Calculator|g" "$INDEX"
sed -i "s|Template description.|Free $TITLE Calculator by HaeyaGo.|g" "$INDEX"

echo ""
echo "✅ Done!"
echo ""
echo "Created:"
echo "  $TOOL/"
echo ""
echo "Title:"
echo "  $TITLE Calculator"
echo ""