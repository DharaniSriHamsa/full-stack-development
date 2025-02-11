function showFeature(feature) {
    let content = document.getElementById("content");
    content.innerHTML = ""; // Clear previous content

    switch (feature) {
        case 'atm': atmUI(); break;
        case 'shopping': shoppingUI(); break;
        case 'grading': gradingUI(); break;
        case 'traffic': trafficUI(); break;
        case 'movie': movieUI(); break;
        case 'job': jobUI(); break;
        case 'coupon': couponUI(); break;
        case 'fitness': fitnessUI(); break;
        case 'electricity': electricityUI(); break;
        case 'flight': flightUI(); break;
    }
}

// 1️⃣ ATM Withdrawal
function atmUI() {
    document.getElementById("content").innerHTML = `
        <h3>ATM Withdrawal</h3>
        <input type="number" id="balance" placeholder="Enter Balance">
        <input type="number" id="amount" placeholder="Enter Amount">
        <input type="password" id="pin" placeholder="Set PIN">
        <input type="password" id="enteredPin" placeholder="Enter PIN">
        <button onclick="atmWithdrawal()">Withdraw</button>
        <p id="result"></p>
    `;
}
function atmWithdrawal() {
    let balance = parseFloat(document.getElementById("balance").value);
    let amount = parseFloat(document.getElementById("amount").value);
    let pin = document.getElementById("pin").value;
    let enteredPin = document.getElementById("enteredPin").value;
    let result = document.getElementById("result");

    if (enteredPin !== pin) result.innerHTML = "Incorrect PIN";
    else if (amount > balance) result.innerHTML = "Insufficient Funds";
    else if (amount % 100 !== 0) result.innerHTML = "Enter amount in multiples of 100";
    else result.innerHTML = `Withdrawal Successful! New Balance: $${balance - amount}`;
}

// 2️⃣ Online Shopping Discount
function shoppingUI() {
    document.getElementById("content").innerHTML = `
        <h3>Online Shopping</h3>
        <input type="number" id="orderAmount" placeholder="Enter Order Amount">
        <button onclick="calculateFinalAmount()">Calculate</button>
        <p id="result"></p>
    `;
}
function calculateFinalAmount() {
    let orderAmount = parseFloat(document.getElementById("orderAmount").value);
    let result = document.getElementById("result");
    let discount = orderAmount > 1000 ? 0.20 : orderAmount >= 500 ? 0.10 : 0;
    let finalAmount = orderAmount - (orderAmount * discount);
    let shipping = finalAmount > 50 ? 0 : 10;
    finalAmount += shipping;
    result.innerHTML = `Final Amount: $${finalAmount} (Discount: ${discount * 100}%, Shipping: $${shipping})`;
}

// 3️⃣ Student Grading
function gradingUI() {
    document.getElementById("content").innerHTML = `
        <h3>Student Grading</h3>
        <input type="number" id="marks" placeholder="Enter Marks">
        <input type="number" id="attendance" placeholder="Enter Attendance %">
        <button onclick="calculateGrade()">Calculate Grade</button>
        <p id="result"></p>
    `;
}
function calculateGrade() {
    let marks = parseFloat(document.getElementById("marks").value);
    let attendance = parseFloat(document.getElementById("attendance").value);
    let result = document.getElementById("result");
    if (attendance > 90) marks += 5;
    let grade = marks >= 90 ? "A" : marks >= 80 ? "B" : marks >= 70 ? "C" : marks >= 60 ? "D" : "F";
    result.innerHTML = `Final Grade: ${grade}`;
}
// Fitness Membership Plan
function fitnessUI() {
    document.getElementById("content").innerHTML = `
        <h3>Choose Your Fitness Plan</h3>
        <label for="type">Select a Plan:</label>
        <select id="type">
            <option value="basic">Basic ($20) - Gym Access</option>
            <option value="premium">Premium ($50) - Gym + Trainer</option>
            <option value="vip">VIP ($80) - Gym + Trainer + Diet Plan</option>
        </select><br><br>

        <label for="trainer">Need a Personal Trainer?</label>
        <select id="trainer">
            <option value="no">No</option>
            <option value="yes">Yes</option>
        </select><br><br>

        <label for="diet">Need a Diet Plan?</label>
        <select id="diet">
            <option value="no">No</option>
            <option value="yes">Yes</option>
        </select><br><br>

        <button onclick="choosePlan()">Suggest Plan</button>
        <p id="result"></p>
    `;
}

function choosePlan() {
    let type = document.getElementById("type").value;
    let trainer = document.getElementById("trainer").value;
    let diet = document.getElementById("diet").value;
    let result = document.getElementById("result");

    let suggestedPlan = "Basic ($20) - Gym Access";

    if (trainer === "yes" && diet === "yes") {
        suggestedPlan = "VIP ($80) - Gym + Trainer + Diet Plan";
    } else if (trainer === "yes") {
        suggestedPlan = "Premium ($50) - Gym + Trainer";
    } else if (diet === "yes") {
        suggestedPlan = "VIP ($80) - Gym + Trainer + Diet Plan"; // Diet Plan is only available in VIP
    }

    result.innerHTML = `Suggested Plan: ${suggestedPlan}`;
}

// 4️⃣ Traffic Light Control
function trafficUI() {
    document.getElementById("content").innerHTML = `
        <h3>Traffic Light Control</h3>
        <select id="trafficDensity">
            <option value="heavy">Heavy Traffic</option>
            <option value="moderate">Moderate Traffic</option>
            <option value="light">Light Traffic</option>
        </select>
        <button onclick="trafficLightControl()">Check Timing</button>
        <p id="result"></p>
    `;
}
function trafficLightControl() {
    let density = document.getElementById("trafficDensity").value;
    let result = document.getElementById("result");
    let time = density === "heavy" ? 60 : density === "moderate" ? 40 : 20;
    result.innerHTML = `Green Light: ${time} seconds`;
}

// 5️⃣ Coupon Code Application
function couponUI() {
    document.getElementById("content").innerHTML = `
        <h3>Apply Coupon</h3>
        <input type="number" id="orderAmount" placeholder="Enter Order Amount">
        <input type="text" id="couponCode" placeholder="Enter Coupon Code">
        <button onclick="applyCouponUI()">Apply</button>
        <p id="result"></p>
    `;
}
function applyCouponUI() {
    let orderAmount = parseFloat(document.getElementById("orderAmount").value);
    let couponCode = document.getElementById("couponCode").value;
    let result = document.getElementById("result");

    if (couponCode === "DISCOUNT10" && orderAmount > 500) {
        orderAmount *= 0.9;
    } else if (couponCode === "FREESHIP" && orderAmount > 200) {
        orderAmount = orderAmount;
    }
    result.innerHTML = `Final Amount: $${orderAmount}`;
}

// 6️⃣ Electricity Bill Calculation
function electricityUI() {
    document.getElementById("content").innerHTML = `
        <h3>Electricity Bill Calculation</h3>
        <input type="number" id="units" placeholder="Enter Units">
        <input type="number" id="timeOfDay" placeholder="Enter Time (24-hour format)">
        <button onclick="calculateElectricityUI()">Calculate</button>
        <p id="result"></p>
    `;
}
function calculateElectricityUI() {
    let units = parseFloat(document.getElementById("units").value);
    let timeOfDay = parseFloat(document.getElementById("timeOfDay").value);
    let rate = units <= 100 ? 5 : units <= 300 ? 4 : 3;
    if (timeOfDay >= 20 || timeOfDay < 8) rate *= 1.1;
    let bill = units * rate;
    document.getElementById("result").innerHTML = `Total Bill: $${bill.toFixed(2)}`;
}
// Movie Ticket Booking
function movieUI() {
    document.getElementById("content").innerHTML = `
        <h3>Movie Ticket Booking</h3>
        <input type="number" id="tickets" placeholder="Number of Tickets">
        <select id="movieTime">
            <option value="morning">Morning (10 AM - 12 PM)</option>
            <option value="afternoon">Afternoon (2 PM - 5 PM)</option>
            <option value="evening">Evening (6 PM - 9 PM)</option>
        </select>
        <button onclick="bookMovieTickets()">Book</button>
        <p id="result"></p>
    `;
}
function bookMovieTickets() {
    let tickets = parseInt(document.getElementById("tickets").value);
    let movieTime = document.getElementById("movieTime").value;
    let result = document.getElementById("result");

    let pricePerTicket = movieTime === "morning" ? 8 : movieTime === "afternoon" ? 10 : 12;
    let totalPrice = tickets * pricePerTicket;

    result.innerHTML = `Total Price: $${totalPrice}`;
}

// Flight Booking
function flightUI() {
    document.getElementById("content").innerHTML = `
        <h3>Flight Booking</h3>
        <input type="text" id="departure" placeholder="Enter Departure City">
        <input type="text" id="destination" placeholder="Enter Destination City">
        <input type="date" id="travelDate">
        <select id="ticketClass">
            <option value="economy">Economy</option>
            <option value="business">Business</option>
            <option value="first">First Class</option>
        </select>
        <button onclick="bookFlight()">Book</button>
        <p id="result"></p>
    `;
}

function bookFlight() {
    let departure = document.getElementById("departure").value;
    let destination = document.getElementById("destination").value;
    let travelDate = document.getElementById("travelDate").value;
    let ticketClass = document.getElementById("ticketClass").value;
    let result = document.getElementById("result");

    if (!departure || !destination || !travelDate) {
        result.innerHTML = "Please fill all fields.";
        return;
    }

    let basePrice = 200; // Base price for economy
    let priceMultiplier = ticketClass === "business" ? 1.5 : ticketClass === "first" ? 2 : 1;
    let finalPrice = basePrice * priceMultiplier;

    result.innerHTML = `Flight booked from ${departure} to ${destination} on ${travelDate}.<br>
                        Class: ${ticketClass.toUpperCase()}<br>
                        Total Price: $${finalPrice}`;
}
// Job Eligibility
function jobUI() {
    document.getElementById("content").innerHTML = `
        <h3>Job Eligibility Check</h3>
        <input type="number" id="age" placeholder="Enter Age">
        <input type="text" id="qualification" placeholder="Enter Qualification">
        <input type="number" id="experience" placeholder="Enter Years of Experience">
        <button onclick="checkJobEligibility()">Check Eligibility</button>
        <p id="result"></p>
    `;
}

function checkJobEligibility() {
    let age = parseInt(document.getElementById("age").value);
    let qualification = document.getElementById("qualification").value.toLowerCase();
    let experience = parseInt(document.getElementById("experience").value);
    let result = document.getElementById("result");

    if (age < 18) {
        result.innerHTML = "Not eligible: Minimum age is 18.";
        return;
    }

    if (qualification !== "bachelor" && qualification !== "master" && qualification !== "phd") {
        result.innerHTML = "Not eligible: Qualification must be Bachelor, Master, or PhD.";
        return;
    }

    if (experience < 1) {
        result.innerHTML = "Not eligible: Minimum 1 year of experience required.";
        return;
    }

    result.innerHTML = "✅ Eligible for the job!";
}

