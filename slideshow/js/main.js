// your js here...

var imgs = ['mountain1.jpg', 'mountain2.jpg', 'mountain3.jpg']
var currentImg = 0;

window.addEventListener('load', function(e){
    document.querySelector('.carousel>img').src = 'images/'+ imgs[0];

    document.querySelector('.carousel').addEventListener('click', function (evt){
        var target = evt.target;
        if(target.classList.contains('control'))
        {
            if(target.classList.contains('next'))
            {
                if(currentImg == (imgs.length - 1))
                {
                    currentImg = 0;
                }
                else
                {
                    currentImg += 1;
                }
            }
            else if(target.classList.contains('prev'))
            {
                if(currentImg == 0)
                {
                    currentImg = (imgs.length - 1);
                }
                else
                {
                    currentImg -= 1;
                }
            }

            document.querySelector('.carousel>img').src = 'images/' + imgs[currentImg];
        }
    })
})