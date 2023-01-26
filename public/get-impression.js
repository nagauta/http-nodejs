// 広告の画像を取得する
// 広告が表示された時間
// 広告が表示された位置
// 広告が表示される際のブラウザのウインドウサイズ
window.addEventListener('load', (event) => {
    let startTime = Date.now();
    console.log('ページが完全に読み込まれました');
    var img = getAdImage();
    if (img.complete && img.naturalWidth !== 0) {
        const endTime = Date.now();
        const loadTime = endTime - startTime;
        console.log("Load time: " + loadTime + "ms");

        console.log(`ad : w:${img.width}, h:${img.height}`);
        console.log(`widow : w:${window.innerWidth}, h:${window.innerHeight}`);
        const rect = img.getBoundingClientRect();
        console.log("Left: " + rect.left + ", Top: " + rect.top + ", bottom-right: " + (rect.left + rect.width) + ", bottom: " + (rect.top + rect.height));
        if(window.innerHeight < rect.top){
            console.log(`out of height. `);
        }
        if(window.innerWidth <  (rect.left + rect.width)){
            console.log(`out of width. `);
        }
        let img_element = document.createElement('img');
        var random = Math.random();
        img_element.src=`/image.png?${random}&`;
        console.log(`/image.png?${random}`);
    } else {
        img.onload = function () {
            const endTime = Date.now();
            const loadTime = endTime - startTime;
            console.log("Load time: " + loadTime + "ms");

            console.log(`ad : w:${img.width}, h:${img.height}`);
            console.log(`widow : w:${window.innerWidth}, h:${window.innerHeight}`);    
            const rect = img.getBoundingClientRect();
            console.log("Left: " + rect.left + ", Top: " + rect.top);
            let img_element = document.createElement('img');
            var random = Math.random();
            img_element.src=`/image.png?${random}`;
            console.log(`/image.png?${random}`);
        }
    }
    
  });
function getAdImage(){
    var elems = document.querySelector('[href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"]');
    return elems.children[0];
}
