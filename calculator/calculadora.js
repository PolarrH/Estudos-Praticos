function appendToDisplay(value) {
        document.getElementById('display').value += value;
    }

    function clearDisplay() {
        document.getElementById('display').value = '';
    }

    function calculate() {
        try {
            const expression = document.getElementById('display').value;
            const result = eval(expression);

            if (!Number.isFinite(result)) {
                document.getElementById('display').value = 'Error';
            } else {
                document.getElementById('display').value = result;
            }
        } catch (error) {
            document.getElementById('display').value = 'Error';
        }
    }