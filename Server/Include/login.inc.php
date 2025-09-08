<?php
 include_once "../../Components/header.php"

?>
          <div class="login-container">
        <div class="logo">
            <h1>ASA IMS Partners Pte. Ltd.</h1>
            <p>Professional Services</p>
        </div>

        <div class="welcome-section">
            <h2>Welcome Back</h2>
            <p>Sign in to your account to continue</p>
        </div>

        <form id="loginForm">
            <div class="form-group">
                <label for="email">Email Address</label>
                <div class="input-wrapper">
                    <input type="email" id="email" name="email" placeholder="Enter your email address" required>
                </div>
                <div class="error-message">
                    <span>⚠</span> Please enter a valid email address
                </div>
            </div>

            <div class="form-group">
                <label for="password">Password</label>
                <div class="input-wrapper">
                    <input type="password" id="password" name="password" placeholder="Enter your password" required>
                    <button type="button" class="password-toggle" id="passwordToggle">👁</button>
                </div>
                <div class="error-message">
                    <span>⚠</span> Password is required
                </div>
            </div>

            <div class="forgot-password">
                <a href="#" id="forgotPasswordLink">Forgot your password?</a>
            </div>

            <button type="submit" class="login-btn" id="loginBtn">
                <div class="btn-content">
                    <div class="loading-spinner" id="loadingSpinner"></div>
                    <span id="btnText">Sign In</span>
                </div>
            </button>
        </form>

        <div class="divider">
            <span>Don't have an account?</span>
        </div>

        <div class="signup-link">
            <a href="/Babershop/Server/Include/signin.php" id="signupLink">Create new account</a>
        </div>
    </div>
<?php 
 include_once "../../Components/footer.php"

?>