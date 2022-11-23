class Observable{
    constructor(){
        this.observers = []
    }

    subscribe(observer){
        this.observers.push(observer)
    }

    unsubscribe(func){
        this.observers = this.observers.filter(observer !== func)
    }

    notify(value){
        this.observers.forEach(observer => {
            observer(value);
        })
    }
}

const notify = (value) => {
   let body = document.getElementById('app');
   console.log(body);
   const element = document.createElement('div');
   element.innerText = value;
   body.appendChild(element);
}

const observer = new Observable();
observer.subscribe(notify);
observer.subscribe(notify);
observer.subscribe(notify);
observer.subscribe(notify);
observer.notify('Task created successfully');
