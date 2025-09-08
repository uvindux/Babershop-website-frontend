<?php
 include_once "../../Components/header.php"

?>
   <div class="form-container">
    
    

        <div class="form-title">
            <h2>Create Account</h2>
            <p>Join our platform today</p>
        </div>

        <form id="registrationForm" method="post" action="/Babershop/Server/Checking/login.inc.php">
            <div class="form-group">
                <input type="text" id="fullName" name="fullName" placeholder="Enter your full name" required>
                <label for="fullName">Full Name</label>
                <div class="error-message">Please enter your full name</div>
            </div>

            <div class="form-group">
                <input type="email" id="phoneNumber" name="Email" placeholder="Enter your phone number" required>
                <label for="Email">Email</label>
                <div class="error-message">Please enter a valid phone number</div>
            </div>

            <div class="form-group">
                <input type="password" id="password" name="password" placeholder="Create a strong password" required>
                <label for="password">Password</label>
                <div class="strength-meter">
                    <div class="strength-fill" id="strengthFill"></div>
                </div>
                <div class="password-requirements">
                    <h4>Password Requirements</h4>
                    <div class="requirement" id="lengthReq">
                        <span class="requirement-icon">✗</span>
                        At least 8 characters long
                    </div>
                    <div class="requirement" id="upperReq">
                        <span class="requirement-icon">✗</span>
                        One uppercase letter
                    </div>
                    <div class="requirement" id="lowerReq">
                        <span class="requirement-icon">✗</span>
                        One lowercase letter
                    </div>
                    <div class="requirement" id="numberReq">
                        <span class="requirement-icon">✗</span>
                        One number
                    </div>
                    <div class="requirement" id="specialReq">
                        <span class="requirement-icon">✗</span>
                        One special character
                    </div>
                </div>
                <div class="error-message">Password doesn't meet requirements</div>
            </div>

            <button type="submit" class="submit-btn">Create Account</button>
        </form>
    </div>
    

 

</body>

</html>
<?php
include_once "../../Components/footer.php";
?>