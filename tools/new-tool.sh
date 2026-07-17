#!/data/data/com.termux/files/usr/bin/bash

clear

echo "========================================"
echo "      HaeyaGo Tool Generator v2.0"
echo "========================================"
echo

read -p "Tool Name: " TOOL_NAME
read -p "Slug (example: profit-margin): " SLUG
read -p "Category: " CATEGORY
read -p "Meta Description: " META_DESCRIPTION
read -p "Meta Keywords: " META_KEYWORDS
read -p "Tool Intro: " TOOL_INTRO

CURRENT_YEAR=$(date +%Y)
CANONICAL_URL="https://haeyago.com/tools/$SLUG/"

mkdir -p "tools/$SLUG"

cp tools/_template/index.html "tools/$SLUG/index.html"
cp tools/_template/style.css "tools/$SLUG/style.css"
cp tools/_template/script.js "tools/$SLUG/script.js"

INDEX="tools/$SLUG/index.html"

FORM=$(cat <<'EOF'
<div class="form-group">

<label>Input Value</label>

<input
type="number"
inputmode="decimal"
step="0.01"
min="0"
id="value"
placeholder="0.00">

</div>
EOF
)

DEFAULT_RESULT="Enter the required values, then tap Calculate."

HOW_TO_USE=$(cat <<'EOF'
<section class="card">

<h2>How to Use</h2>

<p>

Enter the required values into the calculator and tap <strong>Calculate</strong>. The result will appear instantly.

</p>

</section>
EOF
)

FAQ=$(cat <<'EOF'
<section class="card">

<h2>Frequently Asked Questions</h2>

<h3>How does this calculator work?</h3>

<p>

This calculator uses the standard formula for this calculation and displays the result instantly.

</p>

</section>
EOF
)

FORMULA=$(cat <<'EOF'
<section class="card">

<h2>Formula</h2>

<p>

Replace this section with the actual formula for your calculator.

</p>

</section>
EOF
)

RELATED_TOOLS=$(cat <<'EOF'
<div class="related-tools">

<a href="../index.html">
Browse More Tools
</a>

</div>
EOF
)

sed -i "s|{{TOOL_NAME}}|$TOOL_NAME|g" "$INDEX"
sed -i "s|{{META_DESCRIPTION}}|$META_DESCRIPTION|g" "$INDEX"
sed -i "s|{{META_KEYWORDS}}|$META_KEYWORDS|g" "$INDEX"
sed -i "s|{{CATEGORY}}|$CATEGORY|g" "$INDEX"
sed -i "s|{{TOOL_INTRO}}|$TOOL_INTRO|g" "$INDEX"
sed -i "s|{{CANONICAL_URL}}|$CANONICAL_URL|g" "$INDEX"
sed -i "s|{{CURRENT_YEAR}}|$CURRENT_YEAR|g" "$INDEX"

echo
echo "========================================"
echo "Tool created successfully!"
echo "========================================"
echo
echo "Folder:"
echo "tools/$SLUG/"
echo
echo "Files:"
echo "- index.html"
echo "- style.css"
echo "- script.js"
echo