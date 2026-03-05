class StateMachine {
    constructor() {
        this.state = 'idle';
    }
    
    transition(action) {
        switch(this.state) {
            case 'idle':
                switch(action) {
                    case 'start':
                        this.state = 'loading';
                        console.log('idle → loading');
                        break;
                    default:
                        console.log('Недопустимое действие в idle');
                }
                break;
                
            case 'loading':
                switch(action) {
                    case 'success':
                        this.state = 'success';
                        console.log('loading → success');
                        break;
                    case 'error':
                        this.state = 'error';
                        console.log('loading → error');
                        break;
                }
                break;
                
            case 'success':
            case 'error':
                switch(action) {
                    case 'reset':
                        this.state = 'idle';
                        console.log(`${this.state} → idle`);
                        break;
                }
                break;
        }
    }
}

const sm = new StateMachine();
console.log("State Machine:");
console.log("Начальное состояние:", sm.state);
sm.transition('start');
sm.transition('success');
sm.transition('reset');
