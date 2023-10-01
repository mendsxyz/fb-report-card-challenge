// Cross Desktop Media Query
const crossDesktop = window.matchMedia("(min-width: 769px)");

// Selectors
let bodyText = document.querySelectorAll(".body");
let boldBodyText = document.querySelectorAll(".body-bold");
let boldBodyTextUppercase = document.querySelectorAll(".body-bold-uppercase");
let boldSubtitleText = document.querySelectorAll(".subtitle-bold");
let boldSubtitleTextUppercase = document.querySelectorAll(".subtitle-bold-uppercase");
let tableHeaderCells = document.querySelectorAll("table tr > th");
//let tableHeaderCellsFirst = document.querySelectorAll(".subjectGrades tr:first-child > th:first-child");
let tableDataCells = document.querySelectorAll("table tr > td");
let scoreSummaryHeaderCells = document.querySelectorAll(".scoreSummary tr > th");

// Desktop: Cross Init
function checkCrossDesktop(e) {
    
    if(e.matches){
            
        bodyText.forEach(text => {
            text.style.fontSize = "1rem";
        });
            
        boldBodyText.forEach(text => {
            text.style.fontSize = "1.08rem";
        });
           
        boldBodyTextUppercase.forEach(text => {
            text.style.fontSize = "1.16rem";
        });
            
        boldSubtitleText.forEach(text => {
            text.style.fontSize = "1.14rem";
        });
            
        boldSubtitleTextUppercase.forEach(text => {
            text.style.fontSize = "1.18rem";
        });
            
        tableHeaderCells.forEach(cell => {
            cell.style.fontSize = "1rem";
        });
            
        tableDataCells.forEach(cell => {
            cell.style.fontSize = "1rem";
        });
            
        scoreSummaryHeaderCells.forEach(cell => {
            cell.style.width = "7.62rem";
        });
        
    }
    
}

// Opera / Chrome
if(navigator.userAgent.includes("OPR") || navigator.userAgent.includes("Chrome")){
    
    bodyText.forEach(text => {
        text.style.fontSize = "0.46rem";
    });
    
    boldBodyText.forEach(text => {
        text.style.fontSize = "0.46rem";
    });
    
    boldBodyTextUppercase.forEach(text => {
        text.style.fontSize = "0.46rem";
    });
    
    boldSubtitleText.forEach(text => {
        text.style.fontSize = "0.46rem";
    });
    
    boldSubtitleTextUppercase.forEach(text => {
        text.style.fontSize = "0.46rem";
    });
    
    tableHeaderCells.forEach(cell => {
        cell.style.fontSize = "0.46rem";
    });
    
    tableDataCells.forEach(cell => {
        cell.style.fontSize = "0.4rem";
    });
    
    scoreSummaryHeaderCells.forEach(cell => {
        cell.style.paddingRight = "0.46rem";
    });
    
    crossDesktop.addListener(checkCrossDesktop);
    
    checkCrossDesktop(crossDesktop);
    
}else{
    undefined
}
