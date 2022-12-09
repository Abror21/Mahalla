export const AndijonBar = generateNums();
export const BuxoroBar = generateNums();
export const JizzaxBar = generateNums();
export const QashqadaryoBar = generateNums();
export const NavoiyBar = generateNums();
export const NamanganBar = generateNums();
export const SamarqandBar = generateNums();
export const SurxondaryoBar = generateNums();
export const SirdaryoBar = generateNums();
export const ToshkentVBar = generateNums();
export const FargonaBar = generateNums();
export const XorazmBar = generateNums();
export const ToshkentShBar = generateNums();
export const QoraqalpoqistonBar = generateNums();

function generateNums() {
    const numbers = [];
    for (let i = 1; i < 15; i++) {
        numbers.push(Math.floor(Math.random() * (100 - 1) + 1));
    }
    return numbers;
}