function calcularTotales() {
    // Obtener los valores de los activos corrientes
    let efectivo2023 = parseFloat(document.getElementById("efectivo2023").value) || 0;
    let cuentas2023 = parseFloat(document.getElementById("cuentas2023").value) || 0;
    let inventarios2023 = parseFloat(document.getElementById("inventarios2023").value) || 0;

    let efectivo2024 = parseFloat(document.getElementById("efectivo2024").value) || 0;
    let cuentas2024 = parseFloat(document.getElementById("cuentas2024").value) || 0;
    let inventarios2024 = parseFloat(document.getElementById("inventarios2024").value) || 0;

    // Calcular totales de activos corrientes
    let totalCorrientes2023 = efectivo2023 + cuentas2023 + inventarios2023;
    let totalCorrientes2024 = efectivo2024 + cuentas2024 + inventarios2024;

    // Mostrar los resultados en la tabla
    document.getElementById("totalCorrientes2023").innerText = totalCorrientes2023.toLocaleString();
    document.getElementById("totalCorrientes2024").innerText = totalCorrientes2024.toLocaleString();

    // Obtener los valores de los activos no corrientes
    let inversiones2023 = parseFloat(document.getElementById("inversiones2023").value) || 0;
    let cuentasNo2023 = parseFloat(document.getElementById("cuentasNo2023").value) || 0;
    let propiedad2023 = parseFloat(document.getElementById("propiedad2023").value) || 0;

    let inversiones2024 = parseFloat(document.getElementById("inversiones2024").value) || 0;
    let cuentasNo2024 = parseFloat(document.getElementById("cuentasNo2024").value) || 0;
    let propiedad2024 = parseFloat(document.getElementById("propiedad2024").value) || 0;

    // Calcular totales de activos no corrientes
    let totalNoCorrientes2023 = inversiones2023 + cuentasNo2023 + propiedad2023;
    let totalNoCorrientes2024 = inversiones2024 + cuentasNo2024 + propiedad2024;

    // Mostrar los resultados en la tabla
    document.getElementById("totalNoCorrientes2023").innerText = totalNoCorrientes2023.toLocaleString();
    document.getElementById("totalNoCorrientes2024").innerText = totalNoCorrientes2024.toLocaleString();

    // Calcular el total de activos
    let totalActivos2023 = totalCorrientes2023 + totalNoCorrientes2023;
    let totalActivos2024 = totalCorrientes2024 + totalNoCorrientes2024;

    // Mostrar los totales generales
    document.getElementById("totalActivos2023").innerText = totalActivos2023.toLocaleString();
    document.getElementById("totalActivos2024").innerText = totalActivos2023.toLocaleString();
}
