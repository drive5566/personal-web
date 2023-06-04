// function animate(obj, target, callback) {
//     clearInterval(obj.timer)
//     obj.timer = setInterval(function () {
//         var step = (target - window.pageYOffset) / 10; //加入緩動動畫公式
//         step = step > 0 ? Math.ceil(step) : Math.floor(step)
//         if (Math.abs(window.pageYOffset - target) <= Math.abs(step)) {
//             clearInterval(obj.timer)
//             if (callback) {
//                 callback()
//             }
//         } else {
//             // obj.style.left = window.pageYOffset + step + 'px'
//             window.scroll(0, window.pageYOffset + step)
//         }
//     }, 15)
// }
function animate(obj, target, callback) {
    clearInterval(obj.timer);
    var distance = target - window.pageYOffset;
    var step = distance / 25; // 加入緩動動畫公式
    step = step > 0 ? Math.ceil(step) : Math.floor(step);

    obj.timer = setInterval(function () {
        var remainingDistance = target - window.pageYOffset;
        if (Math.abs(remainingDistance) <= Math.abs(step)) {
            clearInterval(obj.timer);
            window.scroll(0, target); // 直接滾動到目標位置，避免最後一次步長太小
            if (callback) {
                callback();
            }
        } else {
            window.scroll(0, window.pageYOffset + step);
        }
    }, 15);
}



// menu滾動動畫
let experience = document.querySelector('.experience')
let background2 = document.querySelector('.background-2')
let background3 = document.querySelector('.background-3')
let background4 = document.querySelector('.background-4')
let skill = document.querySelector('.skill')
let project = document.querySelector('.project')


experience.addEventListener('click', function () {
    animate(window, background2.offsetTop)
})

skill.addEventListener('click', function () {
    animate(window, background3.offsetTop)
})

project.addEventListener('click', function () {
    animate(window, background4.offsetTop)
})

// menu滾動動畫結束


// 返回頂部滾動
let gotop = document.querySelector('.go-top')
gotop.addEventListener('click', function () {
    animate(window, 0)

})


document.addEventListener('scroll', function () {
    if (window.pageYOffset >= background2.offsetTop) {
        gotop.style.display = ('block')
    } else {
        gotop.style.display = ('none')

    }


})
// 返回頂部滾動結束


// 技能條動畫

let value1 = document.querySelector('.value1')
let value2 = document.querySelector('.value2')
let value3 = document.querySelector('.value3')
let value4 = document.querySelector('.value4')
let value5 = document.querySelector('.value5')
let value6 = document.querySelector('.value6')


document.addEventListener('scroll', function () {
    if (window.pageYOffset >= background3.offsetTop) {

        value1.classList.add('value-move')
        value1.style.width = 95 + '%'

        setTimeout(function () {
            value2.classList.add('value-move')
            value2.style.width = 95 + '%'
        }, 200);



        setTimeout(function () {
            value3.classList.add('value-move2')
            value3.style.width = 90 + '%'
        }, 400);

        setTimeout(function () {
            value4.classList.add('value-move3')
            value4.style.width = 50 + '%'
        }, 600);

        setTimeout(function () {
            value5.classList.add('value-move3')
            value5.style.width = 50 + '%'
        }, 800);

        setTimeout(function () {
            value6.classList.add('value-move4')
            value6.style.width = 40 + '%'
        }, 1000);
    }
})

// 技能條動畫結束

// 經歷動畫開始
let point1 = document.querySelector('.point-1')
let point2 = document.querySelector('.point-2')
let point3 = document.querySelector('.point-3')
document.addEventListener('scroll', function () {
    if (window.pageYOffset >= background2.offsetTop) {

        point3.classList.add('fadeInOut')

        setTimeout(function () {
            point2.classList.add('fadeInOut')
        }, 500);

        setTimeout(function () {
            point1.classList.add('fadeInOut')
        }, 1000);

    }

})
// 經歷動畫結束

//串天氣API
// CWB-C3C5CC0C-4772-40C5-8FC3-2E23656ACF12
let containerWeather = document.querySelector('.container-weather')
let locationName
let todayWeather

const apiUrl = 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-C3C5CC0C-4772-40C5-8FC3-2E23656ACF12&locationName=%E6%96%B0%E5%8C%97%E5%B8%82&elementName=CI&sort=time'
axios.get(apiUrl).then(function (res) {
    console.log(res);
    locationName = res.data.records.location[0].locationName
    todayWeather = res.data.records.location[0].weatherElement[0].time


    console.log(locationName);
    console.log(todayWeather);

    let works = `  <li class="weather-location">
  <p>${locationName}</p>
</li>
<li class="weather-date">
   <p>${ todayWeather[0].startTime}</p>
</li>
<li class="weather">
   <p>${ todayWeather[0].parameter.parameterName}</p>
</li>

`

    containerWeather.innerHTML = works;
})

// let dataTime
// let Time = document.querySelector('.Time')
// const timeApi = 'http://worldtimeapi.org/api/timezone/Asia/Taipei'
// axios.get(timeApi).then(function (res) {
//     console.log(res);

//     dataTime = res.data.datetime

//     let works2 = `<p>${dataTime}</p>`

//     Time.innerHTML = works2

// })


