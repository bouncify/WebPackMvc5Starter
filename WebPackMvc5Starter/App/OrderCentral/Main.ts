

function getIdFromText(strid: string): number {
    var result = 0;

    if (strid) {
        const stAr = strid.split("_");
        result = Number(stAr[stAr.length - 1]);
    }

    return result;
}