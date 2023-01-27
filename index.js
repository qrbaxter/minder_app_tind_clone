import { modelsData } from "/data.js"
import Model from "/Model.js"


const profileContainer = document.getElementById('profile-container')
const badgeLike = document.getElementById('badge-like')
const badgeNope = document.getElementById('badge-nope')

document.getElementById("no").addEventListener("click", nope)
document.getElementById("yes").addEventListener('click', like)

function getNewModel(){
    const nextModelData = modelsData.shift()
    return nextModelData ? new Model(nextModelData) : {}
}

let isWaiting = false



function like() {
    if (!isWaiting) {
        currentModel.setMatchStatus(true)
        badgeLike.classList.toggle('hidden')
        isWaiting = true
        
        setTimeout(() => {
            badgeLike.classList.toggle('hidden')
            isWaiting = false
            
            if (modelsData.length > 0) {
                currentModel = getNewModel()
                render()
            }
            else {
                end()
            }
        }, 1000)
    }
}






function nope() {
    if (!isWaiting) {
        badgeNope.classList.toggle('hidden')
        isWaiting = true
        
        setTimeout(() => {
            badgeNope.classList.toggle('hidden')
            isWaiting = false
            
            if (modelsData.length > 0) {
                currentModel = getNewModel()
                render()
            }
            else {
                end()
            }
        }, 1000)
    }
}       

function end() {
    profileContainer.innerHTML = `
        <div class="end-message">
            <h3>No more models available</h3>
        </div>
    `
    document.getElementById('btn-container').style.display = "none"
}

function render() {
    profileContainer.innerHTML = currentModel.getModelHtml()
}

let currentModel = getNewModel()
render()




