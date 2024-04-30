document.getElementById('fetch-kaloriabazis').onclick = fetchKaloria;
let updateKaloriabazisModal;

async function fetchKaloria() {
    const res = await fetch('/kaloriabazis');
    const kaloriak = await res.json();

    let kaloriabazisHTML = `
    <section class="page-section text-white mb-0" id="kaloriabazis"><h1>Kalóriabázis</h1>
    <table class="table table-dark table-bordered">
    <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Keresés...">
    <thead>
        <tr>
            <th width="32%">Élelmiszer megnevezése (100 grammra)</th>
            <th width="15%">Energia (kcal)</th>
            <th width="15%">Fehérje (g)</th>
            <th width="15%">Zsír (g)</th>
            <th width="15%">Szénhidrát (g)</th>
            <th width="3%">Törlés</th>
            <th width="4%">Módosítás</th>
        </tr>
    </thead>`;

    for (let kaloria of kaloriak) {
        kaloriabazisHTML +=
            `<table class="table table-primary table-bordered" id="myTable">
            <tbody>
                <tr>
                    <td width="30%">${kaloria.neve}</td>
                    <td width="15%">${kaloria.energia}</td>
                    <td width="15%">${kaloria.feherje}</td>
                    <td width="15%">${kaloria.zsir}</td>
                    <td width="15%">${kaloria.szenhidrat}</td>
                    <td width="5%"><button class="btn btn-outline-danger float-end mx-1" onclick="deleteKaloriabazis(${kaloria.id})"><i class="fa-solid fa-trash"></i></button></td>
                    <td width="5%"><button class="btn btn-outline-info float-end mx-1" onclick="editKaloriabazis(${kaloria.id})"><i class="fa-solid fa-pen-to-square"></button></i></td>
                </tr>
            </tbody>
        </section>
        </table>`



    }


    document.getElementById('kaloria-list').innerHTML = kaloriabazisHTML;

}

//kaloriabazis POST
document.getElementById('create-kaloriabazis').onsubmit = async function (event) {
    event.preventDefault();
    const neve = event.target.elements.neve.value;
    const energia = event.target.elements.energia.value;
    const feherje = event.target.elements.feherje.value;
    const zsir = event.target.elements.zsir.value;
    const szenhidrat = event.target.elements.szenhidrat.value;

    //console.log(neve,energia,feherje,zsir,szenhidrat);

    const res = await fetch('/kaloriabazis', {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({ neve, energia, feherje, zsir, szenhidrat })


    });

    console.log(neve, energia, feherje, zsir, szenhidrat);

    if (res.ok) {
        event.target.elements.neve.value = null;
        event.target.elements.energia.value = null;
        event.target.elements.feherje.value = null;
        event.target.elements.zsir.value = null;
        event.target.elements.szenhidrat.value = null;
        fetchKaloria();
    }
    else {
        alert("Felvitel sikertelen!");
    }


}

//kaloriabazis DELETE
async function deleteKaloriabazis(id) {
    const confirmed = confirm('Biztosan szeretnéd törölni?');
    if (!confirmed) {
        return;
    }
    console.log(id);
    const res = await fetch(`/kaloriabazis/${id}`, {
        method: "DELETE"

    });
    if (res.ok) {

        fetchKaloria();
    }
    else {
        alert("Törlés sikertelen!");
    }

}

//kaloriabazis MODAL feltöltése adatokkal az id alapján
async function editKaloriabazis(id) {
    const res = await fetch(`/kaloriabazis/${id}`);
    const dataFromFetch = await res.json();
    //console.log(dataFromFetch);d
    const neve = dataFromFetch[0].neve;
    const energia = dataFromFetch[0].energia;
    const feherje = dataFromFetch[0].feherje;
    const zsir = dataFromFetch[0].zsir;
    const szenhidrat = dataFromFetch[0].szenhidrat;
    //console.log(name, season);
    document.getElementById('kaloriabazisNeve').value = neve;
    document.getElementById('kaloriabazisEnergia').value = energia;
    document.getElementById('kaloriabazisFeherje').value = feherje;
    document.getElementById('kaloriabazisZsir').value = zsir;
    document.getElementById('kaloriabazisSzenhidrat').value = szenhidrat;
    //------------------------------------------------------------------------------
    //console.log(id);
    updateKaloriabazisModal = new bootstrap.Modal(document.getElementById('updateKaloriabazisModal'));
    //console.log(modal);
    const kaloriabazisID = document.getElementById('updateKaloriabazisModal');
    //console.log(kaloriabazisID);
    kaloriabazisID.setAttribute('data-kaloriabazisID', id);
    //console.log(kaloriabazisID);

    updateKaloriabazisModal.show();

}

//kaloriabazis PUT
async function updateKaloriabazisData() {
    const modalElements = document.getElementById('updateKaloriabazisModal');

    const id = modalElements.getAttribute('data-kaloriabazisID');
    const neve = document.getElementById('kaloriabazisNeve').value
    const energia = document.getElementById('kaloriabazisEnergia').value
    const feherje = document.getElementById('kaloriabazisFeherje').value
    const zsir = document.getElementById('kaloriabazisZsir').value
    const szenhidrat = document.getElementById('kaloriabazisSzenhidrat').value
    const res = await fetch(`/kaloriabazis/${id}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({ neve, energia, feherje, zsir, szenhidrat })

    });
    if (res.ok) {
        //alert("Sikeres módosítás!");
        fetchKaloria();
        //resetInput();
        updateKaloriabazisModal.hide();

    } else {
        alert("Sikertelen módosítás!");
    }


};

//Modal elrejtése
function closeModal() {
    updateKaloriabazisModal.hide()
};



$(document).ready(function () {
    // Initialize Tooltip
    $('[data-toggle="tooltip"]').tooltip();

    // Add smooth scrolling to all links in navbar + footer link
    $(".navbar a, footer a[href='#myPage']").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {

            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

})



