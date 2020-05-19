
$.get("http://sigulda-web.azurewebsites.net/api/iron-man/objekts", function (objekti, status) {
    // Izveidot katram objektam jaunu tabulas ierakstu, ņem no servisa, piem., iekarta.Iekartas_ID

    objekti.forEach(function (objekts) {


        var id = "<td>" + objekts.Objekta_ID + "</td>";
        var ObjektaNosaukums = "<td>" + objekts.Objekta_NR + "</td>";
        var ObjektuDaudzums = "<td>" + objekts.Objekta_Daudzums + "</td>";
        var ObjektaCena = "<td>" + objekts.Objekta_Cena + "</td>";
        var ObjektuTermiņš = "<td>" + objekts.Objekta_Termiņš + "</td>";
        var ObjektuIegādesLaiks = "<td>" + objekts.Iegādes_Laiks + "</td>";
        var ObjektaKabinets = "<td>" + objekts.Kabineta_ID + "</td>";

        var objektuRinda = "<tr>" + id + Objekta_NR + Objekta_Daudzums + "</tr>";
        $("#objektu_tabula").append(objektuRinda);

    })
});



$("#objektu_poga").click(function () {

    // Atrod ievades laukus ar konkretam ID vertibam html formam

    var objidstr = $("#obj_id").val();
    var objkabidstr = $("#kab_id").val();
    var objdaudzstr = $("#obj_daudzums").val();
    var objtimestr = $("#obj_time").val();
    var objterminsstr = $("#obj_termins").val();
    var objnrstr = $("#obj_nr").val();
    var objcenastr = $("#obj_cena").val();

    // Konvertē no virknes uz ciparu, ja nepieciesams

    var oid = Number(objidstr);
    var objkabid = Number(objkabidstr);
    var objdaudzums = Number(objdaudzstr);
    var objtime = Number(objtimestr);
    var objtermins = Number(objterminsstr);
    var objnr = Number(objnrstr);
    var objcena = Number(objcenastr);

    // Objekts, ko nosūta servisam, nem no datu bazes kolonnu nosaukumiem

    var objekts = {

        "Objekta_ID": oid,
        "Objekta_NR": objnr,
        "Objekta_Cena": objcena,
        "Objekta_Termiņš": objtermins,
        "Objekta_Daudzums": objdaudzums,
        "Iegādes_Laiks": objtime,
        "Kabineta_ID": objkabid,

    };

    $.post("http://sigulda-web.azurewebsites.net/api/iron-man/objekts",

        objekts,

        function (data, status) {

        });

    $("#Objekta_ID").val(null);
    $("#Objekta_NR").val(null);
    $("#Objekta_Cena").val(null);
    $("#Objekta_Daudzums").val(null);
    $("#Iegādes_Laiks").val(null);
    $("#Objekta_Termiņš").val(null);
    $("#Kabineta_ID").val(null);

});

$.post("http://sigulda-web.azurewebsites.net/api/iron-man/objekts", function (objekts, status) {
    // Izveidot katram objektam jaunu tabulas ierakstu, ņem no servisa, piem., iekarta.Iekartas_ID
    objekts.forEach(function (objektis) {
        var oid = "<td>" + objektis.Objekta_ID + "</td>";
        var objnr = "<td>" + objektis.Objekta_NR + "</td>";
        var objcena = "<td>" + objektis.Objekta_Cena + "</td>";
        var objtermins = "<td>" + objektis.Objekta_Termiņš + "</td>";
        var objdaudz = "<td>" + objektis.Objekta_Daudzums + "</td>";
        var objtime = "<td>" + objektis.Iegādes_Laiks + "</td>";
        var objkabid = "<td>" + objektis.Kabineta_ID + "</td>";

        var objektuRinda = "<tr>" + oid + objnr + objcena + objtermins + objdaudz + objtime + objkabid + "</tr>";
        $("#objektu_tabula").append(objektuRinda);
    });
});
