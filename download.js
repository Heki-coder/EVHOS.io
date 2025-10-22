function Download() {
    const a = document.createElement('a');
    a.download = "PoliceEscape.zip";
    a.href = "PoliceEscape.zip";
    document.body.appendChild(a);
    a.click();
    a.remove();
}