function Browser() {
    let browser = prompt("Enter browser name!")
    if (browser == 'Edge') {
        alert("You've got the Edge!");
    } else if (browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera') {
        alert('Okay we support these browsers too');
    } else {
        alert('We hope that this page looks ok!');
    }
}

function Edge() {
    let browser = prompt("Enter browser name!")
    switch (browser) {
        case 'Edge':
            alert("You've got the Edge");
            break;
        case 'Chrome':
        case 'Firefox':
        case 'Safari':
        case 'Opera':
            alert('Okey we support these browsers too');
            break;
        default:
            alert('We hope that this page looks ok!');
    }
}

function Number() {
    let a = prompt('a?', '');

    if (a == 0) {
        alert(0);
    }

    if (a == 1) {
        alert(1);
    }

    if (a == 2 || a == 3) {
        alert('2,3');
    }
}