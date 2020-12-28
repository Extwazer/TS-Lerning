interface Rect {
    readonly id: string;
    color?: string;
    size: {
        width: number;
        height: number;
    }
}

const rect1: Rect = {
    id: '123',
    size: {
        width: 20,
        height: 30,
    },
    color: '#ccc'
};


const rect2: Rect = {
    id: '1234',
    size: {
        width: 12,
        height: 123,
    }
};

rect2.color = '#fff';


const rect3 = {} as Rect;


// ==================


interface RectWithArea extends Rect {
    getArea: () => number;
}


const rect4: RectWithArea = {
    id: '123456',
    size: {
        width: 15,
        height: 15,
    },
    getArea(): number {
        return this.size.width * this.size.height;
    }
};


// ======================


interface Iclock {
    time: Date
    setTime(date: Date): void
}

class Clock implements Iclock { //implements == реализовывать
    time: Date = new Date();
    setTime(date: Date): void {
        this.time = date
    }
}


// ====================


interface Styles {
    [key: string]: string
}


const css : Styles = {
    border: '1px solid red',
    borderRadius: '50px',
    margin: '0 50px'
};