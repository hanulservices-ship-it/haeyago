#!/data/data/com.termux/files/usr/bin/bash

echo ""
echo "=============================="
echo "   HAEYAGO BUILD SYSTEM"
echo "=============================="
echo ""

TOTAL=0
ERRORS=0

echo "Checking tools..."
echo ""

for dir in */ ; do

NAME="${dir%/}"

if [ "$NAME" = "_template" ]; then
continue
fi

if [ ! -f "$NAME/index.html" ]; then
echo "❌ $NAME : Missing index.html"
ERRORS=$((ERRORS+1))
continue
fi

if [ ! -f "$NAME/script.js" ]; then
echo "❌ $NAME : Missing script.js"
ERRORS=$((ERRORS+1))
continue
fi

if [ ! -f "$NAME/style.css" ]; then
echo "❌ $NAME : Missing style.css"
ERRORS=$((ERRORS+1))
continue
fi

echo "✅ $NAME"

TOTAL=$((TOTAL+1))

done

echo ""
echo "=============================="
echo "Build Complete"
echo "=============================="

echo "Working Tools : $TOTAL"

echo "Errors        : $ERRORS"

echo ""