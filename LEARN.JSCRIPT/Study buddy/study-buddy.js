import { Chart } from "@/components/ui/chart"
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section")
  const navLinks = document.querySelectorAll("nav a")
  const getStartedBtn = document.getElementById("get-started-btn")
  const loginForm = document.getElementById("login-form")
  const registerForm = document.getElementById("register-form")
  const showRegisterLink = document.getElementById("show-register")
  const showLoginLink = document.getElementById("show-login")
  const matchBtn = document.getElementById("match-btn")
  const matchResult = document.getElementById("match-result")
  const startTimerBtn = document.getElementById("start-timer")
  const resetTimerBtn = document.getElementById("reset-timer")
  const timerDisplay = document.getElementById("timer")

  let timerInterval
  let timeLeft = 25 * 60 // 25 minutes in seconds

  function showSection(id) {
    sections.forEach((section) => section.classList.remove("active"))
    navLinks.forEach((link) => link.classList.remove("active"))
    document.getElementById(id).classList.add("active")
    document.querySelector(`nav a[href="#${id}"]`)?.classList.add("active")
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()
      showSection(e.target.getAttribute("href").slice(1))
    })
  })

  getStartedBtn.addEventListener("click", () => showSection("register"))
  showRegisterLink.addEventListener("click", (e) => {
    e.preventDefault()
    showSection("register")
  })
  showLoginLink.addEventListener("click", (e) => {
    e.preventDefault()
    showSection("login")
  })

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    if (email && password) {
      document.getElementById("user-name").textContent = email.split("@")[0]
      showSection("dashboard")
    } else {
      alert("Please enter both email and password.")
    }
  })

  registerForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const username = document.getElementById("username").value
    const email = document.getElementById("reg-email").value
    const password = document.getElementById("reg-password").value
    const confirmPassword = document.getElementById("confirm-password").value
    if (username && email && password && confirmPassword) {
      if (password === confirmPassword) {
        alert("Registration successful! You can now log in.")
        showSection("login")
      } else {
        alert("Passwords do not match.")
      }
    } else {
      alert("Please fill in all fields.")
    }
  })

  matchBtn.addEventListener("click", () => {
    matchBtn.disabled = true
    matchResult.classList.remove("hidden")
    matchResult.textContent = "Finding a study partner..."
    setTimeout(() => {
      const partners = ["Alice", "Bob", "Charlie", "Diana"]
      const randomPartner = partners[Math.floor(Math.random() * partners.length)]
      matchResult.textContent = `You've been matched with ${randomPartner}!`
      matchBtn.disabled = false
    }, 2000)
  })

  startTimerBtn.addEventListener("click", startTimer)
  resetTimerBtn.addEventListener("click", resetTimer)

  function startTimer() {
    if (!timerInterval) {
      timerInterval = setInterval(updateTimer, 1000)
      startTimerBtn.textContent = "Pause"
    } else {
      clearInterval(timerInterval)
      timerInterval = null
      startTimerBtn.textContent = "Resume"
    }
  }

  function resetTimer() {
    clearInterval(timerInterval)
    timerInterval = null
    timeLeft = 25 * 60
    updateTimerDisplay()
    startTimerBtn.textContent = "Start"
  }

  function updateTimer() {
    timeLeft--
    if (timeLeft <= 0) {
      clearInterval(timerInterval)
      timerInterval = null
      alert("Time is up! Take a break.")
      resetTimer()
    }
    updateTimerDisplay()
  }

  function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60)
    const seconds = timeLeft % 60
    timerDisplay.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
  }

  // Progress chart
  const ctx = document.getElementById("progress-chart").getContext("2d")
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "Study Hours",
          data: [2, 4, 3, 5, 2, 3, 1],
          backgroundColor: "rgba(74, 144, 226, 0.6)",
          borderColor: "rgba(74, 144, 226, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: "Hours",
          },
        },
      },
    },
  })
})

