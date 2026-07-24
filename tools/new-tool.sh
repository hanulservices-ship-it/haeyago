#!/data/data/com.termux/files/usr/bin/bash

source tools/engine/formula-engine.sh

clear

echo "========================================"
echo "      HaeyaGo Tool Generator v4.0"
echo "========================================"
echo "Interactive Calculator Wizard"
echo "========================================"
echo

read -p "Tool Name: " TOOL_NAME
read -p "Slug (example: profit-margin): " SLUG
read -p "Category: " CATEGORY
read -p "Meta Description: " META_DESCRIPTION
read -p "Meta Keywords: " META_KEYWORDS
read -p "Tool Intro: " TOOL_INTRO

echo
echo "Calculator Options"
echo

read -p "Include Currency Selector? (y/n): " USE_CURRENCY
read -p "Include Copy & Share Buttons? (y/n): " USE_SHARE
read -p "Include Formula Section? (y/n): " USE_FORMULA
read -p "Include FAQ Section? (y/n): " USE_FAQ

echo
read -p "How many number inputs? " INPUT_COUNT

INPUT_HTML=""
INPUT_IDS=""

for ((i=1; i<=INPUT_COUNT; i++))
do

read -p "Input #$i Label: " LABEL

ID=$(echo "$LABEL" | tr '[:upper:]' '[:lower:]' | tr ' ' '-')

INPUT_IDS="$INPUT_IDS $ID"

INPUT_HTML="$INPUT_HTML

<div class=\"form-group\">

<label>$LABEL</label>

<input
type=\"number\"
inputmode=\"decimal\"
step=\"0.01\"
min=\"0\"
id=\"$ID\"
placeholder=\"0.00\">

</div>"

done

read -p "Result Label: " RESULT_LABEL

read -p "Formula (A,B,C...): " FORMULA_EXPRESSION

CURRENT_YEAR=$(date +%Y)
CANONICAL_URL="https://haeyago.com/tools/$SLUG/"

mkdir -p "tools/$SLUG"

cp tools/_template/index.html "tools/$SLUG/index.html"
cp tools/_template/style.css "tools/$SLUG/style.css"
cp tools/_template/script.js "tools/$SLUG/script.js"

INDEX="tools/$SLUG/index.html"

FORM="$INPUT_HTML"

RESULT_TITLE="$RESULT_LABEL"

FORMULA_JS=$(build_formula "$FORMULA_EXPRESSION")

JS_INPUTS=""

for ID in $INPUT_IDS
do

VAR=$(echo "$ID" | tr '-' '_')

JS_INPUTS="$JS_INPUTS
const ${VAR}=document.getElementById(\"${ID}\");"

done

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

perl -0pi -e "s~\{\{TOOL_NAME\}\}~$TOOL_NAME~g" "$INDEX"
perl -0pi -e "s~\{\{META_DESCRIPTION\}\}~$META_DESCRIPTION~g" "$INDEX"
perl -0pi -e "s~\{\{META_KEYWORDS\}\}~$META_KEYWORDS~g" "$INDEX"
perl -0pi -e "s~\{\{CATEGORY\}\}~$CATEGORY~g" "$INDEX"
perl -0pi -e "s~\{\{TOOL_INTRO\}\}~$TOOL_INTRO~g" "$INDEX"
perl -0pi -e "s~\{\{CANONICAL_URL\}\}~$CANONICAL_URL~g" "$INDEX"
perl -0pi -e "s~\{\{CURRENT_YEAR\}\}~$CURRENT_YEAR~g" "$INDEX"
perl -0pi -e "s~\{\{EXTRA_HEAD\}\}~~g" "$INDEX"
perl -0pi -e "s~\{\{EXTRA_SCRIPTS\}\}~~g" "$INDEX"
perl -0pi -e "s~\{\{BODY_CLASS\}\}~~g" "$INDEX"

export FORM
export DEFAULT_RESULT
export HOW_TO_USE
export FAQ
export FORMULA
export RELATED_TOOLS
export JS_INPUTS
export RESULT_TITLE
export FORMULA_JS

perl -0pi -e 's/\{\{CALCULATOR_FORM\}\}/$ENV{FORM}/ge' "$INDEX"
perl -0pi -e 's/\{\{DEFAULT_RESULT\}\}/$ENV{DEFAULT_RESULT}/ge' "$INDEX"
perl -0pi -e 's/\{\{HOW_TO_USE\}\}/$ENV{HOW_TO_USE}/ge' "$INDEX"
perl -0pi -e 's/\{\{FAQ\}\}/$ENV{FAQ}/ge' "$INDEX"
perl -0pi -e 's/\{\{FORMULA\}\}/$ENV{FORMULA}/ge' "$INDEX"
perl -0pi -e 's/\{\{RELATED_TOOLS\}\}/$ENV{RELATED_TOOLS}/ge' "$INDEX"

perl -0pi -e 's/\{\{JS_INPUTS\}\}/$ENV{JS_INPUTS}/ge' "tools/$SLUG/script.js"

perl -0pi -e 's/\{\{RESULT_TITLE\}\}/$ENV{RESULT_TITLE}/ge' "tools/$SLUG/script.js"

perl -0pi -e 's/\{\{FORMULA_JS\}\}/$ENV{FORMULA_JS}/ge' "tools/$SLUG/script.js"

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