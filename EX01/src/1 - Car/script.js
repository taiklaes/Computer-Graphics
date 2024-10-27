// Função - Main
function main() {
    const canvas = document.querySelector("#canva");
    const webgl = canvas.getContext('webgl');

    if (!webgl) {
        throw new Error('WebGL not supported');
    }

    canvas.addEventListener("mousedown", mouseDown, false);

    // Shaders
    let fragmentShaderSource = document.querySelector("#fragment-shader-2d").text;
    let vertexShaderSource = document.querySelector("#vertex-shader-2d").text;
    let fragmentShader = createShader(webgl, webgl.FRAGMENT_SHADER, fragmentShaderSource);
    let vertexShader = createShader(webgl, webgl.VERTEX_SHADER, vertexShaderSource);
    let program = createProgram(webgl, vertexShader, fragmentShader);
    webgl.useProgram(program);

    // Buffers
    const positionLocation = webgl.getAttribLocation(program, `position`);
    const colorLocation = webgl.getAttribLocation(program, `color`);
    const positionBuffer = webgl.createBuffer();
    const colorBuffer = webgl.createBuffer();

    webgl.enableVertexAttribArray(positionLocation);
    webgl.bindBuffer(webgl.ARRAY_BUFFER, positionBuffer);
    webgl.vertexAttribPointer(positionLocation, 2, webgl.FLOAT, false, 0, 0);

    webgl.enableVertexAttribArray(colorLocation);
    webgl.bindBuffer(webgl.ARRAY_BUFFER, colorBuffer);
    webgl.vertexAttribPointer(colorLocation, 3, webgl.FLOAT, false, 0, 0);

    // Limpar tela
    webgl.clearColor(1.0, 1.0, 1.0, 1.0);
    webgl.clear(webgl.COLOR_BUFFER_BIT);

    draw(webgl, positionBuffer, colorBuffer);
}



// Função - Desenho
let points = 30;
function draw(webgl, positionBuffer, colorBuffer){
    // Cores
    let dark_dark_green = [0.35, 0.4, 0.35];
    let light_gray = [0.80, 0.80, 0.80];
    let dark_gray = [0.30, 0.30, 0.30];
    let dark_green = [0.0, 0.4, 0.0];
    let green = [0.0, 0.5, 0.0];
    let white = [1.0, 1.0, 1.0]; 
    let blue = [0.5, 0.7, 1.0];
    
    // Chassi - Cima do corpo de cima
    webgl.bindBuffer(webgl.ARRAY_BUFFER, positionBuffer);
    setRectangleVertices(webgl, -0.35, 0.1, 0.5, 0.4);
    webgl.bindBuffer(webgl.ARRAY_BUFFER, colorBuffer);
    setRectangleColor(webgl, green);
    webgl.drawArrays(webgl.TRIANGLES, 0, 6);

    // Chassi - Curva do canto superior esquerdo do corpo de cima
    webgl.bindBuffer(webgl.ARRAY_BUFFER, positionBuffer);
    setCircleVertices(webgl, 30, 0.3, -0.3, 0.2);
    webgl.bindBuffer(webgl.ARRAY_BUFFER, colorBuffer);
    setCircleColor(webgl, points, green);
    webgl.drawArrays(webgl.TRIANGLES, 0, 3 * points);

    // Chassi - Curva do canto superior direito do corpo de cima
    webgl.bindBuffer(webgl.ARRAY_BUFFER, positionBuffer);
    setCircleVertices(webgl, 30, 0.3, 0.1, 0.2);
    webgl.bindBuffer(webgl.ARRAY_BUFFER, colorBuffer);
    setCircleColor(webgl, points, green);
    webgl.drawArrays(webgl.TRIANGLES, 0, 3 * points);

    // Janela - Corte
    webgl.bindBuffer(webgl.ARRAY_BUFFER, positionBuffer);
    setRectangleVertices(webgl, -0.6, 0.0, 1.0, 0.2);
    webgl.bindBuffer(webgl.ARRAY_BUFFER, colorBuffer);
    setRectangleColor(webgl, green);
    webgl.drawArrays(webgl.TRIANGLES, 0, 6);

    // Janela
    webgl.bindBuffer(webgl.ARRAY_BUFFER, positionBuffer);
    setCircleVertices(webgl, 30, 0.45, -0.1, 0.);
    webgl.bindBuffer(webgl.ARRAY_BUFFER, colorBuffer);
    setCircleColor(webgl, points, blue);
    webgl.drawArrays(webgl.TRIANGLES, 0, 3 * points);

    // Chassi - Corpo de cima
    webgl.bindBuffer(webgl.ARRAY_BUFFER, positionBuffer);
    setRectangleVertices(webgl, -0.2, 0.0, 0.05, 0.47);
    webgl.bindBuffer(webgl.ARRAY_BUFFER, colorBuffer);
    setRectangleColor(webgl, green);
    webgl.drawArrays(webgl.TRIANGLES, 0, 6);

    // Chassi - Cima do corpo principal
    webgl.bindBuffer(webgl.ARRAY_BUFFER, positionBuffer);
    setRectangleVertices(webgl, -0.7, -0.1, 1.55, 0.1);
    webgl.bindBuffer(webgl.ARRAY_BUFFER, colorBuffer);
    setRectangleColor(webgl, green);
    webgl.drawArrays(webgl.TRIANGLES, 0, 6);

    // Chassi - Meio do corpo principal
    webgl.bindBuffer(webgl.ARRAY_BUFFER, positionBuffer);
    setRectangleVertices(webgl, -0.8, -0.5, 1.75, 0.4);
    webgl.bindBuffer(webgl.ARRAY_BUFFER, colorBuffer);
    setRectangleColor(webgl, green);
    webgl.drawArrays(webgl.TRIANGLES, 0, 6);

    // Chassi - Curva do canto superior esquerdo do corpo principal
    webgl.bindBuffer(webgl.ARRAY_BUFFER, positionBuffer);
    setCircleVertices(webgl, 30, 0.1, -0.70, -0.1);
    webgl.bindBuffer(webgl.ARRAY_BUFFER, colorBuffer);
    setCircleColor(webgl, points, green);
    webgl.drawArrays(webgl.TRIANGLES, 0, 3 * points);

    // Chassi - Curva do canto superior direito do corpo principal
    webgl.bindBuffer(webgl.ARRAY_BUFFER, positionBuffer);
    setCircleVertices(webgl, 30, 0.1, 0.85, -0.1);
    webgl.bindBuffer(webgl.ARRAY_BUFFER, colorBuffer);
    setCircleColor(webgl, points, green);
    webgl.drawArrays(webgl.TRIANGLES, 0, 3 * points);

    // Chassi - Sombra do corpo principal
    webgl.bindBuffer(webgl.ARRAY_BUFFER, positionBuffer);
    setRectangleVertices(webgl, -0.8, -0.5, 1.75, 0.12);
    webgl.bindBuffer(webgl.ARRAY_BUFFER, colorBuffer);
    setRectangleColor(webgl, dark_green);
    webgl.drawArrays(webgl.TRIANGLES, 0, 6);

    // Rodas - Exeterno esquerdo
    webgl.bindBuffer(webgl.ARRAY_BUFFER, positionBuffer);
    setCircleVertices(webgl, 30, 0.25, -0.5, -0.5);
    webgl.bindBuffer(webgl.ARRAY_BUFFER, colorBuffer);
    setCircleColor(webgl, points, dark_dark_green);
    webgl.drawArrays(webgl.TRIANGLES, 0, 3 * points);

    // Rodas - Exeterno direito
    webgl.bindBuffer(webgl.ARRAY_BUFFER, positionBuffer);
    setCircleVertices(webgl, 30, 0.25, 0.5, -0.5);
    webgl.bindBuffer(webgl.ARRAY_BUFFER, colorBuffer);
    setCircleColor(webgl, points, dark_dark_green);
    webgl.drawArrays(webgl.TRIANGLES, 0, 3 * points);

    // Rodas- Externo correção
    webgl.bindBuffer(webgl.ARRAY_BUFFER, positionBuffer);
    setRectangleVertices(webgl, -0.8, -0.9, 1.75, 0.4);
    webgl.bindBuffer(webgl.ARRAY_BUFFER, colorBuffer);
    setRectangleColor(webgl, white);
    webgl.drawArrays(webgl.TRIANGLES, 0, 6);

    // Rodas - Pneu esquerdo
    webgl.bindBuffer(webgl.ARRAY_BUFFER, positionBuffer);
    setCircleVertices(webgl, 30, 0.2, -0.5, -0.5);
    webgl.bindBuffer(webgl.ARRAY_BUFFER, colorBuffer);
    setCircleColor(webgl, points, dark_gray);
    webgl.drawArrays(webgl.TRIANGLES, 0, 3 * points);

    // Rodas - Pneu direito
    webgl.bindBuffer(webgl.ARRAY_BUFFER, positionBuffer);
    setCircleVertices(webgl, 30, 0.2, 0.5, -0.5);
    webgl.bindBuffer(webgl.ARRAY_BUFFER, colorBuffer);
    setCircleColor(webgl, points, dark_gray);
    webgl.drawArrays(webgl.TRIANGLES, 0, 3 * points);

    // Rodas - Calota esquerda
    webgl.bindBuffer(webgl.ARRAY_BUFFER, positionBuffer);
    setCircleVertices(webgl, 30, 0.13, -0.5, -0.5);
    webgl.bindBuffer(webgl.ARRAY_BUFFER, colorBuffer);
    setCircleColor(webgl, points, light_gray);
    webgl.drawArrays(webgl.TRIANGLES, 0, 3 * points);
    
    // Rodas - Calota direita
    webgl.bindBuffer(webgl.ARRAY_BUFFER, positionBuffer);
    setCircleVertices(webgl, 30, 0.13, 0.5, -0.5);
    webgl.bindBuffer(webgl.ARRAY_BUFFER, colorBuffer);
    setCircleColor(webgl, points, light_gray);
    webgl.drawArrays(webgl.TRIANGLES, 0, 3 * points);

    // Rodas - Detalhe esquerda
    webgl.bindBuffer(webgl.ARRAY_BUFFER, positionBuffer);
    setCircleVertices(webgl, 30, 0.05, -0.5, -0.5);
    webgl.bindBuffer(webgl.ARRAY_BUFFER, colorBuffer);
    setCircleColor(webgl, points, white);
    webgl.drawArrays(webgl.TRIANGLES, 0, 3 * points);
    
    // Rodas - Detalhe direita
    webgl.bindBuffer(webgl.ARRAY_BUFFER, positionBuffer);
    setCircleVertices(webgl, 30, 0.05, 0.5, -0.5);
    webgl.bindBuffer(webgl.ARRAY_BUFFER, colorBuffer);
    setCircleColor(webgl, points, white);
    webgl.drawArrays(webgl.TRIANGLES, 0, 3 * points);
}
