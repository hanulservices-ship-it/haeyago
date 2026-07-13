// ===================================
// HaeyaGo Global Script v1.0
// ===================================

document.addEventListener("DOMContentLoaded", () => {

    console.log("HaeyaGo Loaded");

    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function(e){

            const target = document.querySelector(this.getAttribute("href"));

            if(target){

                e.preventDefault();

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });

});

// ===================================
// Utility Functions
// ===================================

function formatNumber(value, decimals = 2){

    return Number(value).toLocaleString(undefined,{

        minimumFractionDigits:decimals,

        maximumFractionDigits:decimals

    });

}

function copyText(text){

    navigator.clipboard.writeText(text)
    .then(()=>{

        alert("Copied to clipboard!");

    })
    .catch(()=>{

        alert("Unable to copy.");

    });

}

async function shareResult(title,text){

    if(navigator.share){

        try{

            await navigator.share({

                title:title,

                text:text

            });

        }catch(err){}

    }else{

        alert("Sharing is not supported on this device.");

    }

}