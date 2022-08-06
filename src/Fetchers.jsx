export async function getDog(){
    const res = await fetch('https://random.dog/woof.json');
    return res.json();
}