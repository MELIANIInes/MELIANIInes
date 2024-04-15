const CtabLinks = document.getElementsByClassName("abtLink");
const CtabContents = document.getElementsByClassName("tabContents");
const tabLinks = Array.from(CtabLinks);
const tabContents= Array.from(CtabContents);

//------------------  about me section-----------------------------
function opentab(){
for (let i = 0; i < tabLinks.length; i++) { 
    tabLinks[i].addEventListener("click", e => {
        var link = e.target;
        var prvlink;
        if ( !(link.classList.contains('activeLink'))){
            tabLinks.forEach(p => {
                if ( p.classList.contains('activeLink')){
                     prvlink = p;
                    
                }
            });
                prvlink.classList.remove('activeLink');
                link.classList.add('activeLink');
                var section= link.innerText;
                tabContents.forEach(d =>{ 
                    if ( d.classList.contains('activeTab')){
                        d.classList.remove('activeTab');
                        
                    }
                })
                tabContents.forEach(d =>{ 
                    if ( d.id === section){
                        d.classList.add('activeTab');
                        
                    }
                })             
    } 
    })
}
};
opentab();

// scroll animation 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// download CV 
document.querySelectorAll('.downloadCV').forEach(button => {
    button.addEventListener('click', function() {
        var cvUrl = ('./CV/Ines-MELIANI-Resume.pdf');
        var link = document.createElement('a');
        link.href = cvUrl;
        link.download =('Ines-MELIANI-Resume.pdf');
        link.click();
    });
});
