if (document.body.id === 'training') {
    const QuestionAndAnswer = document.getElementsByClassName('questionContainer')
    for (i = 0; i < QuestionAndAnswer.length; i++) {
        QuestionAndAnswer[i].addEventListener('click', function () {
            this.classList.toggle('active');
        })
    }
    const mobileQuestionAndAnswer = document.getElementsByClassName('bugclose')
    for (i = 0; i < mobileQuestionAndAnswer.length; i++) {
        mobileQuestionAndAnswer[i].addEventListener('click', function () {
            this.classList.toggle('active');
        })
    }
    const modal = document.querySelector('.modal')
    const modalTwo = document.querySelector('.modalTwo')
    const modalThree = document.querySelector('.modalThree')
    const modalFour = document.querySelector('.modalfour')
    const modalMobile = document.querySelector('.modalMobile')
    const modalMobileTwo = document.querySelector('.modalMobileTwo')
    const modalMobileThree = document.querySelector('.modalMobileThree')
    const modalMobileFour = document.querySelector('.modalMobileFour')
    let imgOne = document.getElementById('click1').addEventListener('click', (e) => {
        e.preventDefault()
        if (modal.style.display === 'none') {
            modal.style.display = 'block'
        } else {
            modal.style.display = 'none'
        }
    })
    let imgTwo = document.getElementById('click2').addEventListener('click', (e) => {
        e.preventDefault()
        if (modalTwo.style.display === 'none') {
            modalTwo.style.display = 'block'
        } else {
            modalTwo.style.display = 'none'
        }
    })
    let imgThree = document.getElementById('click3').addEventListener('click', (e) => {
        e.preventDefault()
        if (modalThree.style.display === 'none') {
            modalThree.style.display = 'block'
        } else {
            modalThree.style.display = 'none'
        }
    })
    let imgFour = document.getElementById('click4').addEventListener('click', (e) => {
        e.preventDefault()
        if (modalFour.style.display === 'none') {
            modalFour.style.display = 'block'
        } else {
            modalFour.style.display = 'none'
        }
    })
    let imgMobile1 = document.getElementById('click5').addEventListener('click', (e) => {
        e.preventDefault()
        if (modalMobile.style.display === 'none') {
            modalMobile.style.display = 'block'
        } else {
            modalMobile.style.display = 'none'
        }
    })
    let imgMobile2 = document.getElementById('click6').addEventListener('click', (e) => {
        e.preventDefault()
        if (modalMobileTwo.style.display === 'none') {
            modalMobileTwo.style.display = 'block'
        } else {
            modalMobileTwo.style.display = 'none'
        }
    })
    document.getElementById('click7').addEventListener('click', (e) => {
        e.preventDefault()
        if (modalMobileThree.style.display === 'none') {
            modalMobileThree.style.display = 'block'
        } else {
            modalMobileThree.style.display = 'none'
        }
    })
    document.getElementById('click8').addEventListener('click', (e) => {
        e.preventDefault()
        if (modalMobileFour.style.display === 'none') {
            modalMobileFour.style.display = 'block'
        } else {
            modalMobileFour.style.display = 'none'
        }
    })

} else {
    const btn = document.querySelector('#click')
    btn.addEventListener('click', () => {
        document.querySelector('#popup').style.display = 'block'
    })
    const btnClose = document.querySelector('#popupBtn')
    btnClose.addEventListener('click', () => {
        document.querySelector('#popup').style.display = 'none'
    })
    const Desktopbtn = document.querySelector('#clickDesktop')
    Desktopbtn.addEventListener('click', () => {
        document.querySelector('#Deskup').style.display = 'block'
    })
    const DesktopCan = document.querySelector('#DesktopCan')
    DesktopCan.addEventListener('click', () => {
        document.querySelector('#Deskup').style.display = 'none'
    })
    const poolbtn = document.querySelector('#clickpool')
    poolbtn.addEventListener('click', () => {
        document.querySelector('#poolpopup').style.display = 'block'
    })
    const btnpoolClose = document.querySelector('#poolpopup')
    btnpoolClose.addEventListener('click', () => {
        document.querySelector('#poolpopup').style.display = 'none'

    })
    const thirdHireMe = document.querySelector('#thirdHireMe')
    thirdHireMe.addEventListener('click', () => {
        document.querySelector('#thirdPopUp').style.display = 'block'
    })
    const btnthirdPopUpClose = document.querySelector('#btnthirdPopUpClose')
    btnthirdPopUpClose.addEventListener('click', () => {
        document.querySelector('#thirdPopUp').style.display = 'none'

    })
    const buttomHireMe = document.querySelector('#buttomHireMe')
    buttomHireMe.addEventListener('click', () => {
        document.querySelector('#bottomPopUp').style.display = 'block'
    })
    const bottomPopUpClosebtn = document.querySelector('#bottomPopUpClosebtn')
    bottomPopUpClosebtn.addEventListener('click', () => {
        document.querySelector('#bottomPopUp').style.display = 'none'

    })
    const buttompoolHireMe = document.querySelector('#buttompoolHireMe')
    buttompoolHireMe.addEventListener('click', () => {
        document.querySelector('#bottompoolDesktop').style.display = 'block'
    })
    const bottompoolDesktopClosebtn = document.querySelector('#bottompoolDesktopClosebtn')
    bottompoolDesktopClosebtn.addEventListener('click', () => {
        document.querySelector('#bottompoolDesktop').style.display = 'none'

    })
    //mobile
    const MobilebuttompoolHireMeBtn = document.querySelector('#MobilebuttompoolHireMeBtn')
    MobilebuttompoolHireMeBtn.addEventListener('click', () => {
        document.querySelector('#bottompoolMobile').style.display = 'block'
    })
    const bottompoolMobileClosebtn = document.querySelector('#bottompoolMobileClosebtn')
    bottompoolMobileClosebtn.addEventListener('click', () => {
        document.querySelector('#bottompoolMobile').style.display = 'none'

    })
    const hireMeMobileBtnOpen = document.querySelector('#hireMeMobileBtnOpen')
    hireMeMobileBtnOpen.addEventListener('click', () => {
        document.querySelector('#bottomMobileHirepopup').style.display = 'block'
        alert('thank you for checking')
    })
    const bottomHireMobilecloseBtn = document.querySelector('#bottomHireMobilecloseBtn')
    bottomHireMobilecloseBtn.addEventListener('click', () => {
        document.querySelector('#bottomMobileHirepopup').style.display = 'none'

    })
}