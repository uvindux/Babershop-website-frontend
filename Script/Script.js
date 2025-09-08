  const form = document.getElementById('loginForm');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const passwordToggle = document.getElementById('passwordToggle');
        const loginBtn = document.getElementById('loginBtn');
        const loadingSpinner = document.getElementById('loadingSpinner');
        const btnText = document.getElementById('btnText');

        // Password visibility toggle
        passwordToggle.addEventListener('click', function() {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            this.textContent = type === 'password' ? '👁' : '🙈';
        });

        // Field validation function
        function validateField(field, validator) {
            const formGroup = field.parentElement.parentElement;
            if (validator(field.value)) {
                formGroup.classList.remove('error');
                return true;
            } else {
                formGroup.classList.add('error');
                return false;
            }
        }

        // Email validation
        emailInput.addEventListener('blur', function() {
            validateField(this, (value) => {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailRegex.test(value.trim());
            });
        });

        // Password validation
        passwordInput.addEventListener('blur', function() {
            validateField(this, (value) => value.trim().length >= 6);
        });

        // Remove error styling on input
        [emailInput, passwordInput].forEach(input => {
            input.addEventListener('input', function() {
                this.parentElement.parentElement.classList.remove('error');
            });
        });

        // Form submission
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const isEmailValid = validateField(emailInput, (value) => {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailRegex.test(value.trim());
            });

            const isPasswordValid = validateField(passwordInput, (value) => value.trim().length >= 6);

            if (isEmailValid && isPasswordValid) {
                // Show loading state
                loginBtn.disabled = true;
                loadingSpinner.style.display = 'block';
                btnText.textContent = 'Signing In...';

                // Simulate API call
                setTimeout(() => {
                    // Check credentials (demo purposes)
                    const email = emailInput.value.trim();
                    const password = passwordInput.value.trim();

                    if (email === 'demo@asaims.com' && password === 'demo123') {
                        btnText.textContent = 'Success!';
                        setTimeout(() => {
                            alert('Welcome back! Login successful.');
                        }, 500);
                    } else {
                        btnText.textContent = 'Invalid Credentials';
                        emailInput.parentElement.parentElement.classList.add('error');
                        passwordInput.parentElement.parentElement.classList.add('error');
                        
                        setTimeout(() => {
                            btnText.textContent = 'Sign In';
                            loginBtn.disabled = false;
                            loadingSpinner.style.display = 'none';
                        }, 2000);
                    }

                    if (email === 'demo@asaims.com' && password === 'demo123') {
                        setTimeout(() => {
                            form.reset();
                            btnText.textContent = 'Sign In';
                            loginBtn.disabled = false;
                            loadingSpinner.style.display = 'none';
                        }, 2000);
                    }
                }, 1500);
            }
        });

        // Demo credential helper
        document.addEventListener('DOMContentLoaded', function() {
            setTimeout(() => {
                const demoNotice = document.createElement('div');
                demoNotice.style.cssText = `
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    background: linear-gradient(135deg, #c95c25, #e27931);
                    color: white;
                    padding: 15px 20px;
                    border-radius: 12px;
                    font-size: 13px;
                    box-shadow: 0 10px 25px rgba(201, 92, 37, 0.3);
                    z-index: 1000;
                    cursor: pointer;
                    animation: slideIn 0.5s ease-out;
                `;
                demoNotice.innerHTML = `
                    <strong>Demo Login:</strong><br>
                    Email: demo@asaims.com<br>
                    Password: demo123<br>
                    <small style="opacity: 0.8;">Click to dismiss</small>
                `;

                const style = document.createElement('style');
                style.textContent = `
                    @keyframes slideIn {
                        from { transform: translateX(100%); opacity: 0; }
                        to { transform: translateX(0); opacity: 1; }
                    }
                `;
                document.head.appendChild(style);

                document.body.appendChild(demoNotice);

                demoNotice.addEventListener('click', () => {
                    demoNotice.remove();
                });

                setTimeout(() => {
                    if (document.body.contains(demoNotice)) {
                        demoNotice.remove();
                    }
                }, 10000);
            }, 2000);
        });

        // Link handlers
        document.getElementById('forgotPasswordLink').addEventListener('click', function(e) {
            e.preventDefault();
            alert('Password reset functionality would be implemented here.');
        });

        document.getElementById('signupLink').addEventListener('click', function(e) {
            e.preventDefault();
            alert('This would redirect to the registration page.');
        });
        const form = document.getElementById('registrationForm');
        const fullNameInput = document.getElementById('fullName');
        const phoneInput = document.getElementById('phoneNumber');
        const passwordInput = document.getElementById('password');
        const strengthFill = document.getElementById('strengthFill');

        // Password strength requirements
        const requirements = {
            length: { element: document.getElementById('lengthReq'), test: (pwd) => pwd.length >= 8 },
            upper: { element: document.getElementById('upperReq'), test: (pwd) => /[A-Z]/.test(pwd) },
            lower: { element: document.getElementById('lowerReq'), test: (pwd) => /[a-z]/.test(pwd) },
            number: { element: document.getElementById('numberReq'), test: (pwd) => /\d/.test(pwd) },
            special: { element: document.getElementById('specialReq'), test: (pwd) => /[!@#$%^&*(),.?":{}|<>]/.test(pwd) }
        };

        // Real-time password validation
        passwordInput.addEventListener('input', function() {
            const password = this.value;
            let metRequirements = 0;

            Object.values(requirements).forEach(req => {
                if (req.test(password)) {
                    req.element.classList.add('met');
                    req.element.querySelector('.requirement-icon').textContent = '✓';
                    metRequirements++;
                } else {
                    req.element.classList.remove('met');
                    req.element.querySelector('.requirement-icon').textContent = '✗';
                }
            });

            // Update strength meter
            strengthFill.className = 'strength-fill';
            if (metRequirements === 0) {
                strengthFill.style.width = '0%';
            } else if (metRequirements <= 2) {
                strengthFill.classList.add('strength-weak');
            } else if (metRequirements <= 3) {
                strengthFill.classList.add('strength-fair');
            } else if (metRequirements <= 4) {
                strengthFill.classList.add('strength-good');
            } else {
                strengthFill.classList.add('strength-strong');
            }
        });

        // Form validation
        function validateField(field, validator) {
            const formGroup = field.parentElement;
            if (validator(field.value)) {
                formGroup.classList.remove('error');
                return true;
            } else {
                formGroup.classList.add('error');
                return false;
            }
        }

        // Input validation on blur
        fullNameInput.addEventListener('blur', function() {
            validateField(this, (value) => value.trim().length >= 2);
        });

        phoneInput.addEventListener('blur', function() {
            validateField(this, (value) => /^[\+]?[0-9\s\-\(\)]{10,}$/.test(value.trim()));
        });

        passwordInput.addEventListener('blur', function() {
            const metRequirements = Object.values(requirements).filter(req => req.test(this.value)).length;
            validateField(this, () => metRequirements >= 5);
        });

        // Form submission
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const isNameValid = validateField(fullNameInput, (value) => value.trim().length >= 2);
            const isPhoneValid = validateField(phoneInput, (value) => /^[\+]?[0-9\s\-\(\)]{10,}$/.test(value.trim()));
            const metRequirements = Object.values(requirements).filter(req => req.test(passwordInput.value)).length;
            const isPasswordValid = validateField(passwordInput, () => metRequirements >= 5);

            if (isNameValid && isPhoneValid && isPasswordValid) {
                // Simulate form submission
                const submitBtn = form.querySelector('.submit-btn');
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'Creating Account...';
                submitBtn.disabled = true;

                setTimeout(() => {
                    alert('Account created successfully! Welcome to ASA IMS Partners.');
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    form.reset();
                    
                    // Reset password requirements display
                    Object.values(requirements).forEach(req => {
                        req.element.classList.remove('met');
                        req.element.querySelector('.requirement-icon').textContent = '✗';
                    });
                    strengthFill.className = 'strength-fill';
                    strengthFill.style.width = '0%';
                }, 2000);
            }
        });

        // Remove error styling on input
        [fullNameInput, phoneInput, passwordInput].forEach(input => {
            input.addEventListener('input', function() {
                this.parentElement.classList.remove('error');
            });
        });

        /*Boooking script */
           const form = document.getElementById('appointmentForm');
        const dateInput = document.getElementById('appointmentDate');
        const timeSlots = document.querySelectorAll('.time-slot:not(.unavailable)');
        const selectedTimeInput = document.getElementById('selectedTime');
        const bookBtn = document.getElementById('bookBtn');
        const successMessage = document.getElementById('successMessage');

        // Set minimum date to today
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        dateInput.min = tomorrow.toISOString().split('T')[0];

        // Time slot selection
        timeSlots.forEach(slot => {
            slot.addEventListener('click', function() {
                if (!this.classList.contains('unavailable')) {
                    timeSlots.forEach(s => s.classList.remove('selected'));
                    this.classList.add('selected');
                    selectedTimeInput.value = this.dataset.time;
                    this.parentElement.parentElement.classList.remove('error');
                }
            });
        });

        // Form validation
        function validateField(field, validator) {
            const formGroup = field.parentElement;
            if (validator(field.value)) {
                formGroup.classList.remove('error');
                return true;
            } else {
                formGroup.classList.add('error');
                return false;
            }
        }

        // Real-time validation
        document.getElementById('firstName').addEventListener('blur', function() {
            validateField(this, (value) => value.trim().length >= 2);
        });

        document.getElementById('lastName').addEventListener('blur', function() {
            validateField(this, (value) => value.trim().length >= 2);
        });

        document.getElementById('email').addEventListener('blur', function() {
            validateField(this, (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()));
        });

        document.getElementById('phone').addEventListener('blur', function() {
            validateField(this, (value) => /^[\+]?[0-9\s\-\(\)]{10,}$/.test(value.trim()));
        });

        document.getElementById('service').addEventListener('change', function() {
            validateField(this, (value) => value !== '');
        });

        document.getElementById('appointmentDate').addEventListener('change', function() {
            validateField(this, (value) => value !== '');
        });

        // Remove error styling on input
        const inputs = form.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('input', function() {
                this.parentElement.classList.remove('error');
            });
        });

        // Form submission
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const firstName = document.getElementById('firstName');
            const lastName = document.getElementById('lastName');
            const email = document.getElementById('email');
            const phone = document.getElementById('phone');
            const service = document.getElementById('service');
            const appointmentDate = document.getElementById('appointmentDate');

            const isFirstNameValid = validateField(firstName, (value) => value.trim().length >= 2);
            const isLastNameValid = validateField(lastName, (value) => value.trim().length >= 2);
            const isEmailValid = validateField(email, (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()));
            const isPhoneValid = validateField(phone, (value) => /^[\+]?[0-9\s\-\(\)]{10,}$/.test(value.trim()));
            const isServiceValid = validateField(service, (value) => value !== '');
            const isDateValid = validateField(appointmentDate, (value) => value !== '');
            
            // Check if time slot is selected
            const timeSlotGroup = document.getElementById('selectedTime').parentElement;
            const isTimeValid = selectedTimeInput.value !== '';
            if (!isTimeValid) {
                timeSlotGroup.classList.add('error');
            } else {
                timeSlotGroup.classList.remove('error');
            }

            if (isFirstNameValid && isLastNameValid && isEmailValid && isPhoneValid && 
                isServiceValid && isDateValid && isTimeValid) {
                
                // Show loading state
                bookBtn.textContent = 'Booking...';
                bookBtn.disabled = true;

                // Simulate booking process
                setTimeout(() => {
                    bookBtn.textContent = 'Appointment Booked!';
                    successMessage.classList.add('show');
                    
                    setTimeout(() => {
                        form.reset();
                        timeSlots.forEach(s => s.classList.remove('selected'));
                        selectedTimeInput.value = '';
                        bookBtn.textContent = 'Book Appointment';
                        bookBtn.disabled = false;
                        successMessage.classList.remove('show');
                        
                        // Reset date minimum
                        const newTomorrow = new Date();
                        newTomorrow.setDate(newTomorrow.getDate() + 1);
                        dateInput.min = newTomorrow.toISOString().split('T')[0];
                    }, 3000);
                }, 2000);
            }
        });

        // Simulate dynamic time slot availability based on date
        dateInput.addEventListener('change', function() {
            const selectedDate = new Date(this.value);
            const dayOfWeek = selectedDate.getDay();
            
            // Reset all slots
            timeSlots.forEach(slot => {
                slot.classList.remove('unavailable');
                slot.style.pointerEvents = 'auto';
            });
            
            // Make some slots unavailable on weekends
            if (dayOfWeek === 0 || dayOfWeek === 6) {
                timeSlots[0].classList.add('unavailable'); // 9 AM
                timeSlots[3].classList.add('unavailable'); // 3:30 PM
            }
        });