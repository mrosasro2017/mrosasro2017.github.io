
var InputNumber = document.getElementById("first");
var OutputNumber = document.getElementById("second");
var InputUnits = document.getElementById("third");
var OutputUnits = document.getElementById("fourth");

    function ConvertorFunction1() {

        if (InputUnits.value == "s" || InputUnits.value == "min" || InputUnits.value == "hr" || InputUnits.value == "day" || InputUnits.value == "yr") {
            OutputUnits.innerHTML = "<option value=\"s\">seconds</option><option value=\"min\">minutes</option>< option value =\"hr\">hours</option>< option value =\"day\">days</option>< option value =\"yr\">years</option>";
        }

        if (InputUnits.value == "in" || InputUnits.value == "ft" || InputUnits.value == "yrd" || InputUnits.value == "mi" || InputUnits.value == "m" || InputUnits.value == "km") {
            OutputUnits.innerHTML = "<option value=\"in\">inches</option><option value=\"ft\">feet</option><option value=\"yrd\">yards</option><option value=\"mi\">miles</option><option value=\"m\">meters</option><option value=\"km\">kilometers</option>";
        }

        if (InputUnits.value == "g" || InputUnits.value == "kg" || InputUnits.value == "oz" || InputUnits.value == "lb" || InputUnits.value == "slug" || InputUnits.value == "ton") {
            OutputUnits.innerHTML = "<option value=\"g\">grams</option><option value=\"kg\">kilograms</option><option value=\"oz\">Ounces</option><option value=\"lb\">pounds</option><option value=\"slug\">slugs</option><option value=\"ton\">tons</option>";
        }
    }

    function displayConversion() {

        if (InputValue.value == "s" || InputUnits.value == "min") {
            if (OutputUnits.value == "s" && InputUnits.value == "s") { OutputNumber.value = InputNumber.value; }
            if (OutputUnits.value == "s" && InputUnits.value == "min") { OutputNumber.value = InputNumber.value * 60; }
            if (OutputUnits.value == "min" && InputUnits.value == "s") { OutputNumber.value = InputNumber.value / 60; }
            if (OutputUnits.value == "min" && InputUnits.value == "min") { OutputNumber.value = OutputNumber.value; }
        }
        if (y.value == "m" || y.value == "km") {

            if (OutputUnits.value == "m" && InputUnits.value == "m") { OutputNumber.value = OutputNumber.value; }
            if (OutputUnits.value == "m" && InputUnits.value == "km") { OutputNumber.value = OutputNumber.value * 1000; }
            if (OutputUnits.value == "km" && InputUnits.value == "m") { OutputNumber.value = OutputNumber.value / 1000; }
            if (OutputUnits.value == "km" && InputUnits.value == "km") { OutputNumber.value = OutputNumber.value; }

        }
        if (y.value == "g" || y.value == "kg") {
            if (OutputUnits.value == "g" && InputUnits.value  == "g") { OutputNumber.value = InputNumber.value; }
            if (OutputUnits.value == "g" && InputUnits.value == "kg") { OutputNumber.value = InputNumber.value * 1000; }
            if (OutputUnits.value == "kg" && InputUnits.value == "g") { OutputNumber.value = InputNumber.value / 1000; }
            if (OutputUnits.value == "kg" && InputUnits.value == "kg") { OutputNumber.value = InputNumber.value; }

        }

    }
