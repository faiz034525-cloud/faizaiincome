<!-- 
MAILERLITE FORM REPLACEMENT
Replace your entire embedded MailerLite form with this code
This matches the exact design from your image
-->

<!-- MailerLite Script (Add to <head> section) -->
<script src="https://groot.mailerlite.com/js/w/webforms.min.js" type="text/javascript"></script>

<!-- FORM SECTION - Replace your old form with this -->
<section class="mailerlite-form-section">
  <div class="form-container">
    <!-- Yellow Label -->
    <div class="form-label">FREE INSTANT ACCESS</div>
    
    <!-- Main Heading -->
    <h1 class="form-title">Get the Guide Now</h1>
    
    <!-- Description -->
    <p class="form-description">Enter your name and email. Receive it immediately.</p>
    
    <!-- MailerLite Form -->
    <form class="ml-block-form" action="https://assets.mailerlite.com/jsonp/2503597/forms/192937718638970293/subscribe" data-code="" method="post" target="_blank">
      
      <!-- First Name Field -->
      <div class="form-field-group">
        <label class="field-label">FIRST NAME</label>
        <input 
          type="text" 
          class="form-input" 
          name="fields[name]" 
          placeholder="Your first name" 
          autocomplete="given-name"
          required
        >
      </div>
      
      <!-- Email Field -->
      <div class="form-field-group">
        <label class="field-label">EMAIL ADDRESS</label>
        <input 
          type="email" 
          class="form-input" 
          name="fields[email]" 
          placeholder="yourname@email.com" 
          autocomplete="email"
          required
        >
      </div>
      
      <!-- Submit Button -->
      <button type="submit" class="form-submit-btn">
        Send Me The First Sale System →
      </button>
      
      <!-- Hidden Fields -->
      <input type="hidden" name="ml-submit" value="1">
      <input type="hidden" name="anticsrf" value="true">
      
      <!-- Privacy Text -->
      <p class="form-privacy">🔒 No spam. Unsubscribe anytime.</p>
    </form>
  </div>
</section>

<!-- 
CSS STYLING - Add this to your <style> section
This creates the exact design from your image
-->
<style>
  /* Form Section Container */
  .mailerlite-form-section {
    width: 100%;
    padding: 60px 20px;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* Form Container */
  .form-container {
    max-width: 500px;
    width: 100%;
  }

  /* Yellow Label */
  .form-label {
    color: #e8b84b;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 15px;
    text-align: center;
  }

  /* Main Title */
  .form-title {
    font-size: 42px;
    font-weight: 700;
    color: #0d0d0d;
    margin: 0 0 15px 0;
    text-align: center;
    line-height: 1.2;
  }

  /* Description Text */
  .form-description {
    font-size: 16px;
    color: #666666;
    text-align: center;
    margin: 0 0 30px 0;
    line-height: 1.6;
  }

  /* Form Block */
  .ml-block-form {
    width: 100%;
  }

  /* Form Field Group */
  .form-field-group {
    margin-bottom: 20px;
  }

  /* Field Label */
  .field-label {
    display: block;
    font-size: 12px;
    font-weight: 700;
    color: #333333;
    margin-bottom: 8px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }

  /* Form Input Fields */
  .form-input {
    width: 100%;
    padding: 14px 16px;
    font-size: 14px;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    font-family: 'Open Sans', Arial, sans-serif;
    box-sizing: border-box;
    transition: all 0.3s ease;
    background-color: #ffffff;
    color: #333333;
  }

  .form-input::placeholder {
    color: #999999;
  }

  .form-input:focus {
    outline: none;
    border-color: #e8b84b;
    box-shadow: 0 0 0 3px rgba(232, 184, 75, 0.1);
  }

  /* Submit Button */
  .form-submit-btn {
    width: 100%;
    padding: 16px 20px;
    background-color: #0d0d0d;
    color: #ffffff;
    border: none;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 10px;
    font-family: 'Open Sans', Arial, sans-serif;
    letter-spacing: 0.5px;
  }

  .form-submit-btn:hover {
    background-color: #1a1a1a;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  .form-submit-btn:active {
    transform: translateY(0);
  }

  /* Privacy Text */
  .form-privacy {
    font-size: 12px;
    color: #999999;
    text-align: center;
    margin-top: 12px;
    margin-bottom: 0;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .form-title {
      font-size: 32px;
    }

    .form-description {
      font-size: 14px;
    }

    .form-input {
      padding: 12px 14px;
      font-size: 13px;
    }

    .form-submit-btn {
      padding: 14px 18px;
      font-size: 13px;
    }
  }

  @media (max-width: 480px) {
    .mailerlite-form-section {
      padding: 40px 15px;
    }

    .form-title {
      font-size: 28px;
    }

    .form-description {
      font-size: 13px;
    }

    .form-label {
      font-size: 11px;
    }

    .field-label {
      font-size: 11px;
    }

    .form-input {
      padding: 11px 12px;
      font-size: 12px;
    }

    .form-submit-btn {
      padding: 12px 16px;
      font-size: 12px;
    }
  }
</style>

<!-- 
SUCCESS MESSAGE HANDLING
Add this JavaScript before closing </body> tag
-->
<script>
  function ml_webform_success_192937718638970293() {
    // This function is called by MailerLite after successful submission
    // You can add custom behavior here if needed
    console.log('Form submitted successfully!');
  }
</script>
