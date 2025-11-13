export function formattedDate(daysAgo = 7) {

    let oneDay = 24 * 60 * 60 * 1000;
    let dateCulc = new Date(Date.now() - oneDay * daysAgo);
    return dateCulc.toISOString().split('T')[0];

} 