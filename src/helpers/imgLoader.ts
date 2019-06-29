export default function(src:string){
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  })
}