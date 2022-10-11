

let radiusDesign = document.querySelector(".radius_design")
let radiusDev = document.querySelector(".radius_dev")
let radiusVideo = document.querySelector(".radius_video")

let radiusDesign1 = document.querySelector(".radius_design1")
let radiusDev1 = document.querySelector(".radius_dev1")
let radiusVideo1 = document.querySelector(".radius_video1")

let radiusDesign2 = document.querySelector(".radius_design2")
let radiusDev2 = document.querySelector(".radius_dev2")
let radiusVideo2 = document.querySelector(".radius_video2")

let designStudio = document.querySelector("#design")
let devStudio = document.querySelector("#developement")
let videoStudio = document.querySelector("#Video")

// let listHome = document.querySelector(".list_home")
// let listStudio = document.querySelector(".list_studio")
// let listProject = document.querySelector(".list_projects1")
// let listContact = document.querySelector(".list_contact")

    radiusDesign.classList.add('is-active')

function radius2() {
    radiusDev1.classList.add('is-active')
}

function radius3() {
    radiusVideo2.classList.add('is-active')
}

function radius4() {
    radiusDesign.classList.add('is-active')
}

function radius5() {
    radiusVideo2.classList.add('is-active')
}
function radius6() {
    radiusDesign.classList.add('is-active')
}

function radius7() {
    radiusDev1.classList.add('is-active')
}

function menu() {
    listProject.classList.add('active')
}
// listHome.classList.add('active')
// listHome.addEventListener("click", ()=> {
//     listHome.classList.add('active')
//     listProject.classList.remove('active')
//     listStudio.classList.remove('active')
//     listContact.classList.remove('active')
// })

// listProject.addEventListener("click", ()=> {
//     listHome.classList.remove('active')
//     listProject.classList.add('active')
//     listStudio.classList.remove('active')
// listContact.classList.remove('active')
// })
// listStudio.addEventListener("click", ()=> {
//     listHome.classList.remove('active')
//     listProject.classList.remove('active')
//     listStudio.classList.add('active')
// listContact.classList.remove('active')
// })
// listContact.addEventListener("click", ()=> {
//     listHome.classList.remove('active')
//     listProject.classList.remove('active')
//     listStudio.classList.remove('active')
//     listContact.classList.add('active')
// })



radiusDesign.addEventListener("click", ()=> {
    devStudio.classList.remove('active')
    videoStudio.classList.remove('active')
    designStudio.classList.remove('active')

    // radiusDesign.classList.add('is-active')
    // radiusDev.classList.remove('is-active')
    // radiusVideo.classList.remove('is-active')

} )

radiusDev.addEventListener("click", ()=> {
    devStudio.classList.add('active')
    videoStudio.classList.remove('active')
    designStudio.classList.add('active')

    // radiusDesign.classList.remove('is-active')
    // radiusDev.classList.add('is-active')
    // radiusVideo.classList.remove('is-active')


} )

radiusVideo.addEventListener("click", ()=> {
    devStudio.classList.remove('active')
    videoStudio.classList.add('active')
    designStudio.classList.add('active')

    //  radiusDesign.classList.remove('is-active')
    // radiusDev.classList.remove('is-active')
    // radiusVideo.classList.add('is-active')


} )




radiusDesign1.addEventListener("click", ()=> {
    devStudio.classList.remove('active')
    videoStudio.classList.remove('active')
    designStudio.classList.remove('active')

    // radiusDesign1.classList.add('is-active')
    // radiusDev1.classList.remove('is-active')
    // radiusVideo1.classList.remove('is-active')

} )

radiusDev1.addEventListener("click", ()=> {
    devStudio.classList.add('active')
    videoStudio.classList.remove('active')
    designStudio.classList.add('active')

    //  radiusDesign1.classList.remove('is-active')
    // radiusDev1.classList.add('is-active')
    // radiusVideo1.classList.remove('is-active')


} )

radiusVideo1.addEventListener("click", ()=> {
    devStudio.classList.remove('active')
    videoStudio.classList.add('active')
    designStudio.classList.add('active')

    //  radiusDesign1.classList.remove('is-active')
    // radiusDev1.classList.remove('is-active')
    // radiusVideo1.classList.add('is-active')


} )






radiusDesign2.addEventListener("click", ()=> {
    devStudio.classList.remove('active')
    videoStudio.classList.remove('active')
    designStudio.classList.remove('active')

    // radiusDesign2.classList.add('is-active')
    // radiusDev2.classList.remove('is-active')
    // radiusVideo2.classList.remove('is-active')

} )

radiusDev2.addEventListener("click", ()=> {
    devStudio.classList.add('active')
    videoStudio.classList.remove('active')
    designStudio.classList.add('active')

    //  radiusDesign2.classList.remove('is-active')
    // radiusDev2.classList.add('is-active')
    // radiusVideo2.classList.remove('is-active')


} )

radiusVideo2.addEventListener("click", ()=> {
    devStudio.classList.remove('active')
    videoStudio.classList.add('active')
    designStudio.classList.add('active')

    //  radiusDesign2.classList.remove('is-active')
    // radiusDev2.classList.remove('is-active')
    // radiusVideo2.classList.add('is-active')


} )

