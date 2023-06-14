const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
<<<<<<< HEAD
    await page.goto('https://8081-fedecacbbbadceafafbbcefaabfececdfccc.project.examly.io/');
=======
    await page.goto('https://8081-ecdecfbaaafafbbcefaabfececdfccc.project.examly.io/');
>>>>>>> Lens_Mart-Saikalyan19
    await page.setViewport({
      width:1200,
      height:800,
    })
      await page.click('#signupLink');
      await page.waitForNavigation();
      await page.type('#email', 'test@gmail.com');
      await page.type('#username', 'testuser');
      await page.type('#mobileNumber', '9876543210');
      await page.type('#password', 'Test@123');
      await page.type('#confirmPassword', 'Test@123');
      await page.click('#submitButton');
      await page.waitForNavigation();
      await page.waitForSelector('#loginBox',{timeout:3000});
      console.log('TESTCASE:FE_signup:success');
    }
     catch(e){
      console.log('TESTCASE:FE_signup:failure');
    }finally{
      await page.close();
      await browser.close();
    }
    
})();

 

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
<<<<<<< HEAD
    await page.goto('https://8081-fedecacbbbadceafafbbcefaabfececdfccc.project.examly.io/');
=======
    await page.goto('https://8081-ecdecfbaaafafbbcefaabfececdfccc.project.examly.io/');
>>>>>>> Lens_Mart-Saikalyan19
    await page.setViewport({
      width:1200,
      height:800,
    })
      await page.type('#email', 'test@gmail.com');
      await page.type('#password', 'Test@123');
      await page.click('#loginButton');
      await page.waitForNavigation();
      await page.waitForSelector('#productHomeButton',{timeout:3000});
      console.log('TESTCASE:FE_login:success');
    }
     catch(e){
      console.log('TESTCASE:FE_login:failure');
    }finally{
      await page.close();
      await browser.close();
    }
    
})();

 

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
<<<<<<< HEAD
    await page.goto('https://8081-fedecacbbbadceafafbbcefaabfececdfccc.project.examly.io/');
=======
    await page.goto('https://8081-ecdecfbaaafafbbcefaabfececdfccc.project.examly.io/');
>>>>>>> Lens_Mart-Saikalyan19
    await page.setViewport({
      width:1200,
      height:800,
    })
    await page.type('#email', 'test@gmail.com');
    await page.type('#password', 'Test@123');
    await page.click('#loginButton');
      await page.waitForNavigation();
      await page.waitForSelector('#productHomeButton',{timeout:3000});
      await page.click('#productHomeButton');
      await page.waitForSelector('#grid1',{timeout:3000});
      await page.click('#productCardButton');
      await page.waitForSelector('#productCardBody',{timeout:3000});
      await page.click('#productOrderButton');
      await page.waitForSelector('#productOrderBody',{timeout:3000});
      await page.click('#logoutButton');
      await page.waitForSelector('#loginBox',{timeout:3000});
      console.log('TESTCASE:FE_userOperation:success');
    }
     catch(e){
      console.log('TESTCASE:FE_userOperation:failure');
    }finally{
      await page.close();
      await browser.close();
    }
    
})();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try{
<<<<<<< HEAD
  await page.goto('https://8081-fedecacbbbadceafafbbcefaabfececdfccc.project.examly.io/');
=======
  await page.goto('https://8081-ecdecfbaaafafbbcefaabfececdfccc.project.examly.io/');
>>>>>>> Lens_Mart-Saikalyan19
  await page.setViewport({
    width:1200,
    height:800,
  })
    await page.type('#email', 'admin@gmail.com');
    await page.type('#password', 'Admin@123');
    await page.click('#loginButton');
    await page.waitForNavigation();
    await page.waitForSelector('#adminProductButton',{timeout:3000});
    await page.click('#editProduct1');
    await page.waitForSelector('#addProductButton',{timeout:3000});
    await page.click('#adminOrderButton');
    await page.waitForSelector('#orderId',{timeout:3000});
    console.log('TESTCASE:FE_adminOperation:success');
  }
   catch(e){
    console.log('TESTCASE:FE_adminOperation:failure');
  }finally{
    await page.close();
    await browser.close();
  }
  
})();