// Smart Contract Details
const contractAddress = '0xefa599908c48bbCF605B374B9BC0513BA8C2d54c'
const tokenAddress = '0x8050bc51D00a2Ad1d42f018Ae1A27c8C5b433810'
// prettier-ignore
const contractABI = [{ "constant": true, "inputs": [], "name": "ceoAddress", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "getMyMiners", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "getBalance", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "initialized", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "rt", "type": "uint256" }, { "name": "rs", "type": "uint256" }, { "name": "bs", "type": "uint256" }], "name": "calculateTrade", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "eth", "type": "uint256" }, { "name": "contractBalance", "type": "uint256" }], "name": "calculateEggBuy", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "marketEggs", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "sellEggs", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "amount", "type": "uint256" }], "name": "seedMarket", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "amount", "type": "uint256" }], "name": "devFee", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "pure", "type": "function" }, { "constant": false, "inputs": [{ "name": "ref", "type": "address" }], "name": "hatchEggs", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "getMyEggs", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "ref", "type": "address" }, { "name": "amount", "type": "uint256" }], "name": "buyEggs", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "lastHatch", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "claimedEggs", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "hatcheryMiners", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "EGGS_TO_HATCH_1MINERS", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "eth", "type": "uint256" }], "name": "calculateEggBuySimple", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "eggs", "type": "uint256" }], "name": "calculateEggSell", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "referrals", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "ceoAddress2", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "adr", "type": "address" }], "name": "getEggsSinceLastHatch", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }];

const tokenABI = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "currentAllowance", "type": "uint256" }, { "internalType": "uint256", "name": "requestedDecrease", "type": "uint256" }], "name": "ERC20FailedDecreaseAllowance", "type": "error" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "allowance", "type": "uint256" }, { "internalType": "uint256", "name": "needed", "type": "uint256" }], "name": "ERC20InsufficientAllowance", "type": "error" }, { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "uint256", "name": "balance", "type": "uint256" }, { "internalType": "uint256", "name": "needed", "type": "uint256" }], "name": "ERC20InsufficientBalance", "type": "error" }, { "inputs": [{ "internalType": "address", "name": "approver", "type": "address" }], "name": "ERC20InvalidApprover", "type": "error" }, { "inputs": [{ "internalType": "address", "name": "receiver", "type": "address" }], "name": "ERC20InvalidReceiver", "type": "error" }, { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }], "name": "ERC20InvalidSender", "type": "error" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }], "name": "ERC20InvalidSpender", "type": "error" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "requestedDecrease", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }];

var app = new Vue({
  el: '#app',
  data() {
    return {
      contest: false,
      buyAmount: 0,
      buyAmountWithoutCommas: 0,
      buyAmount2: 0,
      web3Object: null,
      metamaskAccount: null,
      balance: 0,
      tokenBalance: 0,
      getBalance: 0,
      hatcheryMiners: 0,
      getMyEggs: 0,
      claimedEggs: 0,
      devFee: 0,
      eggstohatch1: 2592000,
      referral: window.location.href,
      referrarAddr: null,
      contractInstance: null,

      // timer
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      timer: true
    }
  },
  beforeMount() {
    const Web3Modal = window.Web3Modal.default
    const WalletConnectProvider = window.WalletConnectProvider.default
    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          rpc: {
            250: 'https://rpc.ankr.com/fantom'
          },
          chainId: 250,
          infuraId: 'd85fda7b424b4212ba72f828f48fbbe1',
          pollingInterval: '10000'
        }
      }
    }

    this.web3Modal = new Web3Modal({
      providerOptions,
      theme: {
        background: '#c6660d',
        main: '#feec6c',
        secondary: '#fff',
        border: '#49221a',
        hover: '#49221a'
      },
      cacheProvider: true,
      disableInjectedProvider: false
    })
  },
  async mounted() {
    var countDownDate = new Date('August 9, 2023 17:00:00').getTime()

    var x = setInterval(() => {
      var now = new Date().getTime()
      var distance = countDownDate - now

      // this.days = Math.floor(distance / (1000 * 60 * 60 * 24))
      // this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      // this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      // this.seconds = Math.floor((distance % (1000 * 60)) / 1000)

      if (distance < 0) {
        clearInterval(x)
        this.timer = false
      }
    }, 1000)

    setInterval(() => {
      if (!this.metamaskAccount) {
        return
      }
      this.readValues()
    }, 10000)

    if (this.web3Modal.cachedProvider) {
      await this.onConnect()
    }

    this.startTimer();
  },
  methods: {
    async updateLastExecutionTime() {
      // Call your smart contract's 'lastHatch' method and update the 'lastExecutionTime'
      const lastHatchTime = await this.contractInstance.methods.lastHatch(this.metamaskAccount).call();
      this.lastExecutionTime = parseInt(lastHatchTime); // Assuming 'lastHatch' returns a Unix timestamp

      console.log('Last execution time updated:', this.lastExecutionTime);

    },

    startTimer() {
      this.calculateRemainingTime(); // Cálculo inicial
      console.log('Timer started. Initial countdown:', this.hours, 'hours', this.minutes, 'minutes');

      setInterval(() => {
        this.calculateRemainingTime();
        console.log('Countdown updated:', this.hours, 'hours', this.minutes, 'minutes');
      }, 60000); // Verifique a cada minuto (60.000 milissegundos)
    },

    calculateRemainingTime() {
      const now = Math.floor(new Date().getTime() / 1000);
      const elapsedTime = now - this.lastExecutionTime;

      // Calculate remaining time in seconds
      const remainingTimeInSeconds = 24 * 60 * 60 - elapsedTime;

      // Atualizar os valores apenas se houver uma mudança nos minutos
      const remainingMinutes = Math.floor(remainingTimeInSeconds / 60);
      if (this.minutes !== remainingMinutes) {
        // Atualizar os valores apenas se houver uma mudança nos minutos
        this.hours = Math.floor(remainingMinutes / 60);
        this.minutes = remainingMinutes % 60;
      }
    },

    formatNumber(number, decimals) {
      return new Intl.NumberFormat('en-US', { maximumFractionDigits: decimals }).format(number);
    },

    setMaxAmount() {
      this.buyAmount = this.tokenBalance;
    },

    toggleContest() {
      this.contest = !this.contest
      document.getElementById('contest').styles.display = 'flex'
    },

    addrTruncation(addr) {
      return addr.slice(0, 6) + '...' + addr.slice(addr.length - 4, addr.length)
    },

    onDisconnect() {
      this.web3Modal.clearCachedProvider()
      localStorage.clear()
      this.web3Object = null
      this.metamaskAccount = null
    },

    async onConnect() {
      try {
        let provider = await this.web3Modal.connect()
        this.onProvider(provider)
        // Subscribe to accounts change
        provider.on('accountsChanged', (accounts) => {
          console.log(accounts)
          this.onProvider(provider)
        })
      } catch (e) {
        console.log('Could not get a wallet connection', e)
        return
      }
    },

    async onProvider(provider) {
      this.web3Object = new Web3(provider)

      this.chainId = await this.web3Object.eth.getChainId()
      if (this.chainId !== 250) {

        //if (this.chainId !== 97) {
        this.notify('Please Connect You Wallet to Fantom Network')
        return
      }

      let accounts = await this.web3Object.eth.getAccounts()
      this.metamaskAccount = accounts[0]
      this.referral = window.location.origin + '/miners/?ref=' + this.metamaskAccount
      this.referrarAddr = window.location.search ? window.location.search.slice(5) : this.metamaskAccount

      let balance = await this.web3Object.eth.getBalance(this.metamaskAccount)
      console.log('balance', balance)
      if (balance == 0) {
        this.balance = balance
      } else {
        this.balance = parseFloat(balance / 1e18).toFixed(4)
      }

      this.contractInstance = new this.web3Object.eth.Contract(contractABI, contractAddress)

      this.readValues()

      await this.updateLastExecutionTime();
      console.log('Last execution time updated:', this.lastExecutionTime);

      this.startTimer(); // Start the countdown timer

    },

    async readValues() {
      const web3 = new Web3('https://rpc.ankr.com/fantom');
      let instance = new web3.eth.Contract(contractABI, contractAddress);
      let tokenInstance = new web3.eth.Contract(tokenABI, tokenAddress);

      try {
        const [eggBalance, tokenBalance, hatcheryMiners, getMyEggs] = await Promise.all([
          instance.methods.getBalance().call(),
          tokenInstance.methods.balanceOf(this.metamaskAccount).call(),
          instance.methods.hatcheryMiners(this.metamaskAccount).call(),
          instance.methods.getMyEggs().call({ from: this.metamaskAccount })
        ]);

        console.log('hatcheryMiners:', this.formatNumber(hatcheryMiners, 2));
        console.log('eggBalance:', this.formatNumber(eggBalance, 2));
        console.log('tokenBalance:', this.formatNumber(tokenBalance, 2));
        console.log('getMyEggs:', getMyEggs);

        this.getBalance = this.formatNumber(parseFloat(eggBalance / 1e18), 2);
        this.tokenBalance = this.formatNumber(parseFloat(tokenBalance / 1e18), 4);
        this.hatcheryMiners = this.formatNumber(hatcheryMiners, 2);
        this.getMyEggs = getMyEggs;

        if (getMyEggs > 0) {
          const [calculateEggSell] = await Promise.all([
            instance.methods.calculateEggSell(getMyEggs).call()
          ]);

          console.log('claimedEggs:', calculateEggSell);

          if (calculateEggSell == 0) {
            this.claimedEggs = calculateEggSell;
          } else {
            const claimedEggsWei = new this.web3Object.utils.BN(calculateEggSell); // Convert to BigNumber
            const devFeeWei = new this.web3Object.utils.BN(await instance.methods.devFee(claimedEggsWei).call());
            console.log('devFee:', devFeeWei);

            // Subtract devFee from claimedEggs
            const claimedEggsMinusDevFee = claimedEggsWei.sub(devFeeWei);

            // Convert back to a string for display
            this.claimedEggs = this.formatNumber(parseFloat(this.web3Object.utils.fromWei(claimedEggsMinusDevFee.toString(), 'ether')), 4);
          }
        }

        this.updateLastExecutionTime(); // Update lastExecutionTime
        this.startTimer(); // Restart the timer

      } catch (error) {
        console.error('Error:', error);
      }
    },

    async bakePizza() {

      let wallet_referrarAddr = '0xc96a2dc16d2231fa0C8b572f2bF34d9Cbfeb8Ca6';
      let getUrlParameter = function getUrlParameter(sParam) {
        let sPageURL = window.location.search.substring(1),
          sURLVariables = sPageURL.split('&'),
          sParameterName, i
        for (i = 0; i < sURLVariables.length; i++) {
          sParameterName = sURLVariables[i].split('=')
          if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1])
          }
        }
      }

      let buyAmount = this.buyAmount;
      let buyAmountWithoutCommas = parseFloat(buyAmount.replace(/,/g, '').replace(/\./g, ''));
      let buyAmount2 = parseFloat(buyAmount.replace(/,/g, ''));

      //  console.log('buyAmount:', buyAmount);
      //  console.log('buyAmountWithoutCommas:', buyAmountWithoutCommas);
      //  console.log('buyAmount2:', buyAmount2);

      let refurl = getUrlParameter('ref')
      if (refurl) {
        localStorage.setItem('ref', refurl)
      }
      let upline = localStorage.getItem('ref') ? localStorage.getItem('ref') : wallet_referrarAddr
      //console.log(this.referrarAddr)
      if (Number(buyAmountWithoutCommas) < 0.01) {
        this.notify('Minimum desposit limit is 0.01 EGGMAN')
        return
      }

      const spendLimit = this.web3Object.utils.toWei(buyAmount2.toString(), 'ether')
      const tokenContract = new this.web3Object.eth.Contract(tokenABI, tokenAddress);

      await tokenContract.methods
        .approve(contractAddress, spendLimit)
        .send({ from: this.metamaskAccount })
        .on('transactionHash', (hash) => {
          console.log('Transaction Hash: ', hash)
          this.notify('Transaction is Submitted!')
        })

      let value = this.web3Object.utils.toWei(buyAmount2.toString(), 'ether')
      //  console.log('value:', value)

      const gasPrice = this.web3Object.utils.toWei('20', 'gwei')
      await this.contractInstance.methods
        .buyEggs(upline, value)
        .send({
          from: this.metamaskAccount,
          to: contractAddress,
          gasPrice: gasPrice
        })
        .on('transactionHash', (hash) => {
          console.log('Transaction Hash: ', hash)
          this.notify('Transaction is Submitted!')
        })
        .on('receipt', (receipt) => {
          this.readValue()
          this.updateLastExecutionTime(); // Update lastExecutionTime
          this.startTimer(); // Restart the timer
          console.log('Receipt: ', receipt)
          this.notify('Transaction is Completed!')
        })
        .on('error', (error, receipt) => {
          console.log('Error receipt: ', receipt)
          this.notify('Transaction is Rejected!')
        })
    },

    rebakePizza() {
      console.log(this.referrarAddr)
      if (Number(this.hatcheryMiners) < 0.01) {
        this.notify('Minimum rebake limit is 0.01 EGGMAN')
        return
      }
      this.contractInstance.methods
        .hatchEggs(this.referrarAddr)
        .send({
          from: this.metamaskAccount,
          to: contractAddress
        })
        .on('transactionHash', (hash) => {
          console.log('Transaction Hash: ', hash)
          this.notify('Transaction is Submitted!')
        })
        .on('receipt', (receipt) => {
          this.readValue()
          console.log('Receipt: ', receipt)
          this.notify('Transaction is Completed!')
        })
        .on('error', (error, receipt) => {
          console.log('Error receipt: ', receipt)
          this.notify('Transaction is Rejected!')
        })
    },
    eatPizza() {
      const gasPrice = this.web3Object.utils.toWei('20', 'gwei')
      this.contractInstance.methods
        .sellEggs()
        .send({
          from: this.metamaskAccount,
          to: contractAddress,
          gasPrice: gasPrice
        })
        .on('transactionHash', (hash) => {
          console.log('Transaction Hash: ', hash)
          this.notify('Transaction is Submitted!')
        })
        .on('receipt', (receipt) => {
          this.readValue()
          this.updateLastExecutionTime(); // Update lastExecutionTime
          this.startTimer(); // Restart the timer
          console.log('Receipt: ', receipt)
          this.notify('Transaction is Completed!')
        })
        .on('error', (error, receipt) => {
          console.log('Error receipt: ', receipt)
          this.notify('Transaction is Rejected!')
        })
    },
    notify(msg) {
      Toastify({
        text: msg,
        duration: 3000,
        gravity: 'top',
        position: 'right',
        style: {
          fontSize: '17px',
          fontWeight: '600',
          color: '#feec6c',
          background: '#c6660d',
          maxWidth: '90%'
        }
      }).showToast()
    },
    copyStringToClipboard() {
      var el = document.createElement('textarea')
      el.value = this.referral
      el.setAttribute('readonly', '')
      el.style = { position: 'absolute', left: '-9999px' }
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
      this.notify('Copied!')
    },

    copyToClipBoard() {
      var content = document.getElementById('refArea')
      console.log(content)
      content.select()
      document.execCommand('copy')
      this.notify('Copied!')
    }
  }
})