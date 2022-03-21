const images = document.querySelectorAll('.image')
const imgs = document.querySelectorAll('.img')
const text = document.querySelector('.text')
const btn = document.querySelector('.button')
const nav = document.querySelectorAll('.link')
var progress = 0
var scores = 100
var fail = ['Неа', 'Ответ неверный','Попробуй еще','В следующий раз повезёт']

for (let i of images){
    i.addEventListener('click', function(){
        if (i.classList.contains('true__answer')){
            i.classList.add('image__success')
            btn.classList.add('button__active')
            if (progress+1 == 1){
                text.innerHTML = 'Ну конечно! Это было просто. На осле из "Бременских музыкантов" могли кататься только бременские музыканты. Увы!'
            }else if(progress+1 ==2){
                text.innerHTML = 'Молодец! Ты распознал настоящего среди этих клонов!'
            }else if(progress+1 == 3){
                text.innerHTML = 'Это был трудный выбор, но ты справился!'
            }else if(progress+1 == 4){
                text.innerHTML = 'Да, это было легко. Тут всех зовут Фредди'
                images.forEach(function(currentValue){
                    currentValue.classList.add('image__success')
                })
            }else if(progress+1 == 5){
                text.innerHTML = 'Это была бы великая битва, но увы!'
                
            }
            if (progress <= nav.length){
                progress += 1
            }
        }else{
            i.classList.add('image__failure')
            var rand = Math.floor(Math.random() * fail.length);
            text.innerHTML = fail[rand]
            scores -= 10
        }
    })
}
btn.addEventListener('click', function(){
    btn.classList.remove('button__active')
    nav[progress].classList.add('link__active')
    for (let i =0; i < imgs.length; i++){
        if (progress+1 < nav.length){
            imgs[i].src=`/imgs/var${progress+1}-${i+1}.jpg`
        }
    }
    images.forEach(function(currentValue){
        currentValue.classList.remove('image__success','image__failure','true__answer')
    })
    if (progress+1 == 2){
        images[2].classList.add('true__answer')
        text.innerHTML = 'Кто из них настоящий буратино???'
    } else if (progress+1 == 3){
        images[0].classList.add('true__answer')
        text.innerHTML = 'Кто из них Сказал фразу "Бесконечность не предел!"'
    }else if (progress+1 == 4){
        images.forEach(function(currentValue){
            currentValue.classList.add('true__answer')
        })
        text.innerHTML = 'А сейчас самый сложный вопрос!!! Кого из них зовут Фредди?'
    }else if(progress+1 == 5){
        images[2].classList.add('true__answer')
        text.innerHTML = 'Кто НЕ является противником Человека-Паука?'
    }else if(progress+1 == 6){
        images.forEach(function(currentValue){
            currentValue.style='display: none'
        })
        if (scores > 75){
            text.innerHTML = `Ваш результат составил ${scores}%. Поздравляю! Это отличный результат!`

        }else if (scores>50 && scores<75 ){
            text.innerHTML = `Ваш результат составил ${scores}% Средненько, но сойдет.`
        }else if (scores < 50){
            text.innerHTML = `Ваш результат составил ${scores}% Могло быть и лучше...`
            
        }
    }
})