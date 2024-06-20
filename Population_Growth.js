window.addEventListener("load", linkEvents);

function linkEvents() {
    document.forms.form1.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission behavior
        drawTable(); // Call the drawTable function
    });
}

function drawTable() {
    var years = parseInt(document.forms.form1.years.value);
    var population = parseInt(document.forms.form1.population.value);
    var growthRate = parseFloat(document.forms.form1.growthRate.value) / 100;
    
    var out_string = "<table>" +
                     "<tr><th>Year</th><th>Population</th><th>Rate of Change (%)</th></tr>";
    var pop = population;

    for (var i = 1; i <= years; i++) {
        var curr_year = new Date().getFullYear() + i;
        var growth = pop * growthRate;
        var new_pop = pop + growth;
        var rate_of_change = ((new_pop - pop) / pop) * 100;
        
        out_string += "<tr>" +
                      "<td>" + curr_year + "</td>" +
                      "<td>" + new_pop.toFixed(2) + "</td>" +
                      "<td>" + rate_of_change.toFixed(2) + "</td>" +
                      "</tr>";
        
        pop = new_pop;
    }

    out_string += "</table>";
    document.getElementById("outarea").innerHTML = out_string;
}
