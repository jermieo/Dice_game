// let arry = [
//     {
//         '1': './img/one.png'
//     },
//     {
//         '2': './img/two.png'
//     },
//       {
//         '3': './img/three.png'
//     },
//        {
//         '4': './img/four.png'
//     },
//         {
//         '5': './img/five.png'
//     },
//     {
//         '6': './img/six.png'
//     },
// ]
// let randomNumber;
// arry.map(element => {
//     randomNumber1 = Math.random() * Object.keys(element) 
//         if (Math.round(randomNumber1) === 0) {
//             randomNumber1 = 6
//         } else {
//             return randomNumber1
//         }    
//     });    
// arry.filter((value) => {
//     if (+Object.keys(value) == Math.round(randomNumber1)) {
//         return randomNumber = Object.entries(value)
//     }
// })

// console.log(randomNumber)



let newdiv = document.createElement('div')
let img = document.createElement('img')
let btn = document.getElementById('bt1')

// Reset
let bt3 = document.getElementById('bt3')
bt3.addEventListener('click', (val) => {
  return location.reload();
})

// player-1

document.getElementById("bt2").disabled = true;
document.getElementById("bt3").disabled = true;

btn.addEventListener('click', (val) => {
   
    if (val.isTrusted === true && val.type === 'click') {               
    let arry = [
            {
                '1': './img/one.png'
            },
            {
                '2': './img/two.png'
            },
            {
                '3': './img/three.png'
            },
            {
                '4': './img/four.png'
            },
                {
                '5': './img/five.png'
            },
            {
                '6': './img/six.png'
            },
        ]
        let randomNumber;
            arry.map(element => {
                randomNumber1 = Math.random() * Object.keys(element) 
                    if (Math.round(randomNumber1) === 0) {
                        randomNumber1 = 6
                    } else {
                        return randomNumber1
                    }    
                });    
            arry.filter((value) => {
                if (+Object.keys(value) == Math.round(randomNumber1)) {
                    return randomNumber = Object.entries(value)
                }
            })

        // console.log(randomNumber)
        img.setAttribute('src', randomNumber[0][1]);
        count = Number(randomNumber[0][0])
        newdiv.appendChild(img)
        document.body.appendChild(newdiv)
        // console.log(newdiv)
        let count_btn_1 = document.getElementById('count1')
        let num1 = parseInt(count_btn_1.innerText) 
        num1 += count
        document.getElementById('count1').innerHTML = num1
        if (num1 >= 30) {
        let p4element = document.getElementById('p4');
            p4element.innerText = "Player One is Win The Game"
            document.getElementById("bt1").disabled = true;
            document.getElementById("bt2").disabled = true;
            document.getElementById("bt3").disabled = false;
        } else {
            document.getElementById("bt1").disabled = true;
            document.getElementById("bt2").disabled = false;
            document.getElementById("bt3").disabled = true;
        }
        

    }
})



// player-2

let bt2 = document.getElementById('bt2')
bt2.addEventListener('click', (val) => {
   
    if (val.isTrusted === true && val.type === 'click') {               
    let arry = [
            {
                '1': './img/one.png'
            },
            {
                '2': './img/two.png'
            },
            {
                '3': './img/three.png'
            },
            {
                '4': './img/four.png'
            },
                {
                '5': './img/five.png'
            },
            {
                '6': './img/six.png'
            },
        ]
        let randomNumber;
            arry.map(element => {
                randomNumber1 = Math.random() * Object.keys(element) 
                    if (Math.round(randomNumber1) === 0) {
                        randomNumber1 = 6
                    } else {
                        return randomNumber1
                    }    
                });    
            arry.filter((value) => {
                if (+Object.keys(value) == Math.round(randomNumber1)) {
                    return randomNumber = Object.entries(value)
                }
            })

        // console.log(randomNumber)
        img.setAttribute('src', randomNumber[0][1]);
        count = Number(randomNumber[0][0])
        newdiv.appendChild(img)
        document.body.appendChild(newdiv)
        // console.log(newdiv)
        let count_btn_2 = document.getElementById('count2')
        let num = parseInt(count_btn_2.innerText)
        num += count
        document.getElementById('count2').innerHTML = num;
        if (num >= 30) {
        let p4element = document.getElementById('p4');
            p4element.innerText = "Player Two is Win The Game"
            document.getElementById("bt1").disabled = true;
            document.getElementById("bt2").disabled = true;
            document.getElementById("bt3").disabled = false;
        } else {
            document.getElementById("bt1").disabled = false;
            document.getElementById("bt2").disabled = true;
            document.getElementById("bt3").disabled = true;
            
        }
           
       
    }
})




