document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("biodataForm");
    const tableBody = document.querySelector("#historyTable tbody");

    let nomor = 1;

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const nama = document.getElementById("nama").value;
        const alamat = document.getElementById("alamat").value;
        const tempatLahir = document.getElementById("tempatLahir").value;
        const tanggalLahir = document.getElementById("tanggalLahir").value;
        const hp = document.getElementById("hp").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        const jk = document.querySelector('input[name="jk"]:checked');

        const hobi = [];

        document.querySelectorAll('input[name="hobi"]:checked').forEach(item => {
            hobi.push(item.value);
        });

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${nomor}</td>
            <td>${nama}</td>
            <td>${alamat}</td>
            <td>${tempatLahir}, ${tanggalLahir}</td>
            <td>${hp}</td>
            <td>${email}</td>
            <td>${"•".repeat(password.length)}</td>
            <td>${jk ? jk.value : "-"}</td>
            <td>${hobi.length ? hobi.join(", ") : "-"}</td>
        `;

        tableBody.appendChild(row);

        nomor++;

        alert("✅ Data berhasil dikirim!");

        form.reset();
    });

});