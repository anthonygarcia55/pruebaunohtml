let backgroundIndex = 0;
const gradients = [
    'gradient-1',
    'gradient-2',
    'gradient-3',
    'gradient-4'
];

function changeBackground() {
    backgroundIndex = (backgroundIndex + 1) % gradients.length;
    document.body.classList.remove(...gradients);
    document.body.classList.add(gradients[backgroundIndex]);
}