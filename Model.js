class Model {
    constructor(data){
        Object.assign(this, data)
    }
    
    setMatchStatus(boolean) {
        this.hasBeenSwiped = true
        this.hasBeenLiked = boolean
    }
    
    getModelHtml() {
        const { name, avatar, age, bio } = this
        return `
            <img class="model-photo" src="${avatar}" alt="Model profile">
            <div class="model-main-text">
                <h2>${name}, ${age}</h2>
                <p>${bio}</p>
            </div>
            <img class="badge hidden" id="badge-like" src="images/badge-like.png">
            <img class="badge hidden" id="badge-nope" src="images/badge-nope.png">
        `
    }
}

export default Model



