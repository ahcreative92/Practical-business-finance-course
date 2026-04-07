import { useState, useEffect } from "react";

// ─── COURSE DATA ────────────────────────────────────────────────────────────

const MODULES = [
  {
    id: 1,
    title: "Financial Foundations",
    emoji: "🏛️",
    tag: "Core Concepts",
    color: "#4F7FFF",
    lesson: {
      intro: "Before making any financial decision — pricing a service, evaluating an investment, or negotiating a salary — you need to understand how money moves through time and how businesses report their health.",
      sections: [
        {
          heading: "Time Value of Money (TVM)",
          body: `A dollar today is worth more than a dollar tomorrow — because today's dollar can be invested and grow.\n\n**The core formula:**\nFV = PV × (1 + r)ⁿ\n- FV = Future Value\n- PV = Present Value\n- r = interest rate per period\n- n = number of periods\n\n**Practical example:** You're deciding whether to take a $5,000 lump sum now or $600/year for 10 years. At a 5% return, $5,000 today grows to $8,144. The stream totals $6,000. Take the lump sum.\n\n**Business application:** When a client signs an 18-month contract at $200/mo, that's $3,600 in future cash. Its present value (at 8% annual) is about $3,340 — a useful number when deciding how much to spend acquiring that client.`,
        },
        {
          heading: "The 3 Core Financial Statements",
          body: `**1. Income Statement (P&L)**\nShows revenue, costs, and profit over a period.\nRevenue → Gross Profit → Operating Profit (EBIT) → Net Profit\n\n**2. Balance Sheet**\nSnapshot of what you own (assets), owe (liabilities), and what's left (equity) at a point in time.\nAssets = Liabilities + Equity — always.\n\n**3. Cash Flow Statement**\nTracks actual cash in and out. Profit ≠ cash. A business can be profitable but go bankrupt if it runs out of cash.\n\n**Practical example:** A consulting firm invoices a client $5,000 in March. On the income statement that's March revenue. But if the client pays in May, the cash flow statement shows a gap — and bills still need to be paid in the meantime.`,
        },
        {
          heading: "Key Financial Ratios",
          body: `Ratios turn raw numbers into insight:\n\n**Liquidity:**\n- Current Ratio = Current Assets ÷ Current Liabilities (aim >1.5)\n- Quick Ratio = (Cash + Receivables) ÷ Current Liabilities\n\n**Profitability:**\n- Gross Margin = (Revenue − COGS) ÷ Revenue\n- Net Profit Margin = Net Profit ÷ Revenue\n\n**Example:** A digital agency earns $15,000/mo in revenue with $5,000 in direct costs (tools, contractors). Gross margin = 67%. That's strong for a service business — most of every dollar earned flows toward profit.`,
        },
      ],
    },
    caseStudy: {
      title: "Case: Reading a Startup's Financials",
      scenario: `You're evaluating a business — either as a potential investor, employee, or adviser. They hand you this summary:\n\n• Revenue: $2.4M\n• COGS: $960K\n• Operating Expenses: $1.1M\n• Cash on Hand: $80K\n• Monthly Burn Rate: $40K\n\nYou have 5 minutes to assess. How healthy is this business?`,
      questions: [
        { q: "What is the gross margin?", answer: "60% — ($2.4M − $960K) ÷ $2.4M. Solid for a SaaS or services business." },
        { q: "What is the operating profit?", answer: "$340K — Revenue $2.4M minus COGS $960K minus OpEx $1.1M." },
        { q: "How many months of runway does it have?", answer: "2 months — $80K cash ÷ $40K monthly burn. This is a red flag. They need funding or to cut burn urgently." },
      ],
    },
    quiz: [
      { q: "A business earns $500K revenue and has $200K in costs of goods sold. What is the gross profit?", options: ["$200K", "$300K", "$500K", "$700K"], answer: 1, explanation: "Gross Profit = Revenue − COGS = $500K − $200K = $300K." },
      { q: "Which statement shows if a business can pay its bills RIGHT NOW?", options: ["Income Statement", "Balance Sheet", "Cash Flow Statement", "Equity Statement"], answer: 2, explanation: "The Cash Flow Statement shows actual cash movement — critical for day-to-day solvency." },
      { q: "FV = PV × (1 + r)ⁿ. If PV=$1,000, r=10%, n=2, what is FV?", options: ["$1,100", "$1,200", "$1,210", "$1,020"], answer: 2, explanation: "Year 1: $1,000 × 1.1 = $1,100. Year 2: $1,100 × 1.1 = $1,210." },
      { q: "Assets = Liabilities + Equity. If assets are $80K and liabilities are $30K, what is equity?", options: ["$110K", "$50K", "$30K", "$80K"], answer: 1, explanation: "Equity = Assets − Liabilities = $80K − $30K = $50K." },
    ],
  },
  {
    id: 2,
    title: "Managerial Accounting",
    emoji: "📊",
    tag: "Cost & Budgeting",
    color: "#10B981",
    lesson: {
      intro: "Managerial accounting isn't about reporting to the outside world — it's about giving decision-makers the data they need to run the business better.",
      sections: [
        {
          heading: "Fixed vs Variable Costs",
          body: `**Fixed costs** don't change with output: rent, subscriptions, salaries.\n**Variable costs** scale with output: materials, commissions, usage fees.\n\n**Example:** A software company's server costs are fixed. Sales commissions paid per deal are variable.\n\nWhy it matters: Lowering fixed costs reduces risk across the board. Lowering variable costs improves margin as you scale — because each additional unit becomes more profitable.`,
        },
        {
          heading: "Break-Even Analysis",
          body: `Break-Even Point = Fixed Costs ÷ (Price − Variable Cost per unit)\n\n**Contribution Margin** = Price − Variable Cost. This is what each sale "contributes" to covering fixed costs and generating profit.\n\n**Example — a web design agency:**\n- Fixed monthly costs: $800 (software, office, admin)\n- Price per client: $250/mo\n- Variable cost per client: $50 (contractor time)\n\nContribution Margin = $250 − $50 = $200\nBreak-Even = $800 ÷ $200 = 4 clients\n\nAt 5 clients the business is profitable. Every client beyond break-even adds $200 directly to the bottom line.`,
        },
        {
          heading: "Budgeting & Variance Analysis",
          body: `A budget is a financial plan. Variance analysis compares actuals to the plan.\n\n**Favourable variance:** Actual better than budget (e.g., costs lower than planned).\n**Unfavourable variance:** Actual worse than budget.\n\n**Example:** A marketing team budgeted $5,000 on a campaign but spent $7,200. That's a $2,200 unfavourable variance. The next question is whether the campaign produced enough pipeline to justify the overspend — variance without context is just a number.\n\n**In practice:** Large organisations run variance reports monthly. Understanding them is a core skill for anyone in finance, operations, or management.`,
        },
      ],
    },
    caseStudy: {
      title: "Case: Should the Business Add a New Pricing Tier?",
      scenario: `A subscription business currently offers one plan at $200/mo. They're considering adding a budget "Starter" tier at $80/mo to attract smaller customers.\n\n• Fixed monthly costs: $1,000\n• Variable cost per customer: $30\n• Current customers: 10 (all on $200 plan)\n• Goal: Add 8 Starter customers\n\nShould they launch the tier?`,
      questions: [
        { q: "What is the contribution margin for the Starter tier?", answer: "$50 — ($80 − $30). Compare to the existing plan's $170 contribution margin ($200 − $30)." },
        { q: "How does adding 8 Starter customers affect monthly profit?", answer: "Adds $400 (8 × $50). But 10 existing customers contribute $1,700 (10 × $170). Each new Starter customer is worth 3.4× less than an existing one." },
        { q: "What's the strategic risk?", answer: "Brand dilution, support overload, and existing customers self-selecting down to the cheaper plan. The numbers can work, but the strategy needs careful guardrails." },
      ],
    },
    quiz: [
      { q: "Fixed costs are $600/mo and contribution margin per unit is $150. What is the break-even quantity?", options: ["2", "3", "4", "5"], answer: 2, explanation: "Break-Even = $600 ÷ $150 = 4 units." },
      { q: "Which cost increases as a service business takes on more clients?", options: ["Office rent", "Annual software licence", "Contractor fees per project", "Owner's salary"], answer: 2, explanation: "Contractor fees per project are variable — they scale with the number of clients served." },
      { q: "You budgeted $1,000 revenue but earned $1,200. This is a:", options: ["Unfavourable variance", "Favourable variance", "Neutral variance", "Fixed variance"], answer: 1, explanation: "Earning more than budgeted is a favourable variance." },
      { q: "Contribution Margin = ?", options: ["Revenue − Fixed Costs", "Revenue − All Costs", "Price − Variable Cost per unit", "Net Profit ÷ Revenue"], answer: 2, explanation: "CM = Price − Variable Cost per unit. It tells you what each sale contributes to covering fixed costs." },
    ],
  },
  {
    id: 3,
    title: "Corporate Finance",
    emoji: "🏦",
    tag: "Capital & Structure",
    color: "#8B5CF6",
    lesson: {
      intro: "Corporate finance answers the biggest question in business: how do you fund growth, and what does that funding actually cost you?",
      sections: [
        {
          heading: "Debt vs Equity Financing",
          body: `**Debt:** Borrowed money (loans, bonds). Must be repaid with interest. You keep ownership.\n**Equity:** Selling ownership stakes (shares, investor capital). No repayment, but you dilute control.\n\n**Trade-off:** Debt is cheaper (tax-deductible interest) but risky if cash flow dips. Equity is expensive (you give away upside) but flexible.\n\n**Example:** A business takes a $50,000 loan at 8% to fund expansion — debt financing. Alternatively, it brings in an investor for 20% equity. If the business grows to $500K in value, that 20% stake is worth $100K — far more expensive than the loan's interest payments.`,
        },
        {
          heading: "WACC — Weighted Average Cost of Capital",
          body: `WACC is the blended cost of all funding sources. It's the minimum return a business must earn to satisfy both lenders and owners.\n\nWACC = (E/V × Re) + (D/V × Rd × (1−Tax))\n- E = Equity value, D = Debt value, V = Total capital\n- Re = Cost of equity, Rd = Cost of debt\n\n**Example:** 60% equity at 12% cost + 40% debt at 6% (after 30% tax = 4.2%)\nWACC = (0.6 × 12%) + (0.4 × 4.2%) = 7.2% + 1.68% = **8.88%**\n\nAny project or investment must return more than 8.88% to create value for the business.`,
        },
        {
          heading: "Leverage and Financial Risk",
          body: `Leverage = using borrowed money to amplify returns (and losses).\n\n**Debt-to-Equity Ratio** = Total Debt ÷ Total Equity\n- D/E of 0.5 = conservative\n- D/E of 2.0 = aggressive\n\n**Operating Leverage** = how sensitive profit is to revenue changes. High fixed costs = high operating leverage = big wins if revenue grows, big losses if it falls.\n\n**Practical use:** When a bank assesses a business loan application, leverage ratios are central to the decision. A D/E above 2.0 signals that the business may struggle to service debt if revenue dips even slightly.`,
        },
      ],
    },
    caseStudy: {
      title: "Case: Fund a Growth Push — Debt or Equity?",
      scenario: `A small agency wants to invest $10,000 in marketing to grow aggressively over 6 months. Two options are on the table:\n\nOption A: Business loan at 9% annual interest\nOption B: Bring in a silent partner for 15% equity stake\n\nThe business is projected to be worth $80,000 in 3 years.`,
      questions: [
        { q: "What is the cost of the loan over 6 months?", answer: "$450 — $10,000 × 9% × (6/12). Straightforward and finite." },
        { q: "What does the 15% equity stake cost in 3 years?", answer: "$12,000 — 15% × $80,000 projected value. That's 26× more expensive than the loan's interest cost." },
        { q: "When would equity make more sense?", answer: "If you can't service debt (no cash flow), if the partner brings skills/network worth more than the stake, or if growth risk is so high that sharing it is worth the dilution." },
      ],
    },
    quiz: [
      { q: "Which is typically cheaper as a funding source?", options: ["Equity", "Debt", "Retained earnings", "They cost the same"], answer: 1, explanation: "Debt is cheaper — interest is tax-deductible and debt holders have lower risk than equity holders, so they require lower returns." },
      { q: "WACC represents:", options: ["The profit margin of the business", "The minimum return needed to satisfy all capital providers", "The interest rate on loans", "The company's revenue growth rate"], answer: 1, explanation: "WACC is the blended cost of all capital — debt and equity. Investments must beat it to create value." },
      { q: "A D/E ratio of 3.0 means:", options: ["The company has 3× more equity than debt", "The company has 3× more debt than equity", "The company has no equity", "The company is profitable"], answer: 1, explanation: "D/E = Debt ÷ Equity. 3.0 means $3 of debt for every $1 of equity — highly leveraged." },
      { q: "High operating leverage means:", options: ["Low fixed costs", "Profits are sensitive to revenue changes", "The company uses lots of debt", "Strong cash flow"], answer: 1, explanation: "High fixed costs create high operating leverage — small revenue changes cause large profit swings." },
    ],
  },
  {
    id: 4,
    title: "Financial Analysis & Valuation",
    emoji: "🔍",
    tag: "Valuation",
    color: "#F59E0B",
    lesson: {
      intro: "Valuation is how you put a number on a business. Whether you're evaluating a stock, assessing a job offer at a startup, or deciding what a business is worth — these tools are essential.",
      sections: [
        {
          heading: "Discounted Cash Flow (DCF)",
          body: `DCF values a business based on its future cash flows, discounted back to today's value.\n\nValue = Σ (FCF_t ÷ (1 + r)^t)\n- FCF = Free Cash Flow each year\n- r = discount rate (often WACC)\n- t = year\n\n**Example:** A small agency generates $2,000 free cash flow/month ($24K/year). Applying a 15% discount rate over 5 years plus a terminal value, its DCF value might be ~$120K–$160K.\n\n**Key insight:** If you grow revenue but FCF stays flat (because costs grow too), the DCF doesn't move. Investors care about FREE cash — what's left after running the business.`,
        },
        {
          heading: "Comparable Company Analysis (Comps)",
          body: `Comps value a company by comparing it to similar ones using multiples:\n\n**EV/EBITDA** = Enterprise Value ÷ Earnings Before Interest, Tax, Depreciation & Amortisation\n**P/E Ratio** = Share Price ÷ Earnings Per Share\n**P/S Ratio** = Share Price ÷ Revenue Per Share\n\n**For stock investing:** The underlying stocks in broad ETFs have P/E ratios. A P/E of 25 means investors are paying $25 for every $1 of earnings — pricing in expected future growth.\n\n**SaaS and subscription comps:** Web design agencies and software businesses on subscription models often trade at 3–5× annual recurring revenue.`,
        },
        {
          heading: "Reading Financial Reports",
          body: `When analysing any stock or business:\n\n1. **Revenue growth rate** — is the top line growing?\n2. **Gross margin trend** — is the business becoming more or less efficient?\n3. **Free Cash Flow** — is profit turning into real cash?\n4. **Debt levels** — can they service obligations if growth slows?\n5. **Management guidance** — what does leadership say about the future?\n\n**Red flags:** Revenue growing but margins shrinking (cost pressure). Profit up but FCF down (aggressive accounting). Debt rising faster than revenue.`,
        },
      ],
    },
    caseStudy: {
      title: "Case: Should You Buy This Stock?",
      scenario: `An investor is comparing two tech stocks to add to their portfolio:\n\nStock A: P/E 18, revenue growth 8%/yr, FCF positive, D/E 0.3\nStock B: P/E 45, revenue growth 40%/yr, FCF negative, D/E 1.8\n\nThey have $500 to allocate. Risk tolerance: moderate.`,
      questions: [
        { q: "What does Stock B's negative FCF mean?", answer: "It's burning more cash than it generates — investing heavily in growth. Sustainable only if growth continues and eventually converts to profit." },
        { q: "Which is riskier and why?", answer: "Stock B. High P/E means high expectations priced in. Negative FCF means cash dependence. High D/E means leverage risk if conditions change." },
        { q: "What would a moderate-risk allocation look like?", answer: "70–80% in Stock A (stable, profitable, cheap valuation), 20–30% in Stock B as a growth bet with defined downside." },
      ],
    },
    quiz: [
      { q: "DCF stands for:", options: ["Debt and Cash Flow", "Discounted Cash Flow", "Dividend Capital Formula", "Direct Cost Financing"], answer: 1, explanation: "DCF values a business by discounting future free cash flows back to present value." },
      { q: "A P/E ratio of 30 means investors are paying:", options: ["$30 per dollar of revenue", "$30 per dollar of earnings", "$3 per dollar of assets", "$30 per share"], answer: 1, explanation: "P/E = Price ÷ Earnings Per Share. P/E of 30 = $30 paid per $1 of earnings." },
      { q: "Which metric best shows if a company's profit is turning into real cash?", options: ["Revenue", "EBITDA", "Free Cash Flow", "Gross Margin"], answer: 2, explanation: "FCF = Operating Cash Flow − Capital Expenditure. It shows what's left after sustaining the business." },
      { q: "A SaaS business with $200K ARR at a 4× revenue multiple is valued at:", options: ["$50K", "$200K", "$400K", "$800K"], answer: 3, explanation: "Valuation = ARR × Multiple = $200K × 4 = $800K." },
    ],
  },
  {
    id: 5,
    title: "Cash Flow & Working Capital",
    emoji: "💧",
    tag: "Liquidity",
    color: "#06B6D4",
    lesson: {
      intro: "More businesses fail from cash flow problems than from unprofitability. Understanding how cash moves — and how to manage the gap between earning and receiving — is survival-level knowledge.",
      sections: [
        {
          heading: "The Cash Conversion Cycle (CCC)",
          body: `CCC = Days Inventory Outstanding + Days Sales Outstanding − Days Payable Outstanding\n\nFor service businesses:\n- No inventory (DIO = 0)\n- DSO = how long clients take to pay\n- DPO = how long you take to pay suppliers\n\n**Goal:** Minimise CCC. Get paid fast, pay suppliers slowly.\n\n**Example:** A subscription agency collects payment automatically on the 1st of each month. DSO ≈ 0. Software bills are due on the 15th. DPO = 15 days. CCC = −15 days — the business receives cash before it pays costs. That's an ideal cash flow position.`,
        },
        {
          heading: "Cash Flow Forecasting",
          body: `A 13-week rolling cash flow forecast is the gold standard for business health monitoring.\n\nFormat:\n- Opening cash balance\n+ Expected receipts (client payments, invoices)\n− Expected payments (rent, tools, contractors)\n= Closing cash balance\n\n**Warning signals:**\n- Closing balance trending toward zero\n- One-off large expenses not planned for\n- Seasonal dips not buffered\n\n**For your job search:** CFOs and finance directors at companies you're targeting build these weekly. Understanding them signals financial literacy that most marketing candidates lack.`,
        },
        {
          heading: "Working Capital Management",
          body: `Working Capital = Current Assets − Current Liabilities\n\nPositive = healthy buffer. Negative = danger zone.\n\n**Current Assets:** Cash, receivables, prepaid expenses\n**Current Liabilities:** Accounts payable, short-term loans, accrued expenses\n\n**Strategies to improve working capital:**\n1. Invoice immediately upon project completion\n2. Offer early payment discounts (e.g., 2% if paid within 7 days)\n3. Negotiate longer payment terms with suppliers\n4. Maintain a cash reserve of 2–3 months of fixed costs`,
        },
      ],
    },
    caseStudy: {
      title: "Case: A Subscription Business Has a Cash Flow Crisis",
      scenario: `A small digital agency is 6 months in with 12 active clients. Revenue looks great on paper:\n• Monthly revenue: $2,100 (mix of tiers)\n• Monthly costs: $800\n• "Profit": $1,300\n\nBut three clients are 45 days late on payment. A payment processor dispute has frozen one account. An unexpected software bill just hit $300. Cash on hand: $200.`,
      questions: [
        { q: "Is the business profitable? Is it solvent?", answer: "Profitable yes — $1,300/mo on paper. Solvent: barely. $200 cash with $800 in costs due is a crisis. Profit ≠ cash." },
        { q: "What immediate actions should the business take?", answer: "1) Chase late clients with firm payment deadlines. 2) Pause non-essential spend. 3) Consider a short-term credit line or defer a supplier payment. 4) Switch late clients to upfront annual billing." },
        { q: "What structural change prevents this from recurring?", answer: "Annual upfront billing (with a small discount as incentive), automated payment collection with no manual invoicing, and maintaining a 2-month cash reserve buffer at all times." },
      ],
    },
    quiz: [
      { q: "Working Capital = ?", options: ["Assets − Liabilities", "Current Assets − Current Liabilities", "Revenue − Costs", "Equity + Debt"], answer: 1, explanation: "Working Capital = Current Assets − Current Liabilities. It measures short-term financial health." },
      { q: "A business is profitable but goes bankrupt. Most likely cause?", options: ["Too much equity", "Negative working capital / cash flow crisis", "High gross margins", "Low P/E ratio"], answer: 1, explanation: "Profit on the income statement doesn't mean cash in the bank. Timing mismatches cause insolvency." },
      { q: "Which action IMPROVES cash flow?", options: ["Extending payment terms to clients", "Delaying supplier payments", "Increasing inventory", "Taking on more debt"], answer: 1, explanation: "Paying suppliers later extends your Days Payable Outstanding, keeping cash in hand longer." },
      { q: "CCC of −10 days means:", options: ["You're losing money", "You collect cash 10 days before you need to pay costs", "Your inventory turns every 10 days", "You owe 10 days of payments"], answer: 1, explanation: "Negative CCC is excellent — it means you get paid before you have to pay out." },
    ],
  },
  {
    id: 6,
    title: "Investment & Portfolio Theory",
    emoji: "📈",
    tag: "Investing",
    color: "#EC4899",
    lesson: {
      intro: "Investment and portfolio theory gives you the framework to evaluate any asset — stocks, funds, or business investments — with the same rigour that professional fund managers use.",
      sections: [
        {
          heading: "Risk vs Return",
          body: `The fundamental trade-off: higher potential returns require accepting higher risk.\n\n**Types of risk:**\n- **Systematic risk** (market risk): affects all assets — recessions, interest rate changes. Can't be diversified away.\n- **Unsystematic risk** (specific risk): affects one company or sector. Can be diversified away.\n\n**Standard deviation** measures volatility — how much returns bounce around the average.\n**Beta** measures sensitivity to the market. Beta=1 moves with market. Beta>1 amplifies moves. Beta<1 is defensive.\n\n**Example:** A technology ETF typically has a beta of ~1.2. When the broader market drops 10%, the ETF tends to drop ~12%. The flip side: in bull markets it outperforms — that's the risk-return trade-off in action.`,
        },
        {
          heading: "CAPM — Capital Asset Pricing Model",
          body: `CAPM calculates the expected return of an asset given its risk:\n\nExpected Return = Rf + β × (Rm − Rf)\n- Rf = Risk-free rate (e.g., US Treasury ~4.5%)\n- β = Beta of the asset\n- Rm = Expected market return (~10% historically)\n- (Rm − Rf) = Market risk premium (~5.5%)\n\n**Example for a tech ETF (β=1.2):**\nExpected Return = 4.5% + 1.2 × 5.5% = 4.5% + 6.6% = **11.1%**\n\nIf the ETF is actually returning 14% — it's generating alpha (above-market returns for its level of risk).`,
        },
        {
          heading: "Diversification & Modern Portfolio Theory",
          body: `MPT (Markowitz, 1952): You can reduce risk without reducing expected return by combining assets that don't move together (low correlation).\n\n**Common mistake:** Holding multiple ETFs that all track similar indices creates the illusion of diversification with little actual risk reduction.\n\n**A well-diversified portfolio might include:**\n- A broad US market fund (e.g., VOO)\n- International developed markets (e.g., VXUS or EFA)\n- Bonds for negative correlation with equities (e.g., BND or AGG)\n- Small-cap or emerging market exposure for growth\n\n**Dollar-cost averaging (DCA)** — investing a fixed amount at regular intervals — removes timing risk and systematically builds positions over time. It's one of the most evidence-backed investment habits for long-term investors.`,
        },
      ],
    },
    caseStudy: {
      title: "Case: Evaluate and Optimise a Portfolio",
      scenario: `An investor contributes $250/month to their portfolio with the following allocation:\n\n• Fund A (US large-cap tech): 40%\n• Fund B (US broad market): 40%\n• Fund C (US tech sector): 20%\n\nTime horizon: 10+ years. Risk tolerance: moderate-high. They want to know if this is optimal.`,
      questions: [
        { q: "What is the key risk with this portfolio?", answer: "Extreme overlap and concentration in US large-cap technology. All three funds are correlated — a tech sector downturn hits all allocations simultaneously. This is concentration, not diversification." },
        { q: "What would a finance professional suggest adding?", answer: "International exposure (e.g., VXUS or EFA), small-cap equities (e.g., VB), and a modest bond allocation (5–10%) to reduce correlation and improve risk-adjusted returns." },
        { q: "Is monthly DCA the right strategy for a 10-year horizon?", answer: "Yes. Dollar-cost averaging removes timing anxiety, builds positions gradually across market cycles, and benefits from compounding over time. The evidence strongly supports it for long-term investors." },
      ],
    },
    quiz: [
      { q: "Beta of 1.5 means the stock:", options: ["Returns 1.5% always", "Is 50% more volatile than the market", "Has 50% less risk than the market", "Pays 1.5% dividend"], answer: 1, explanation: "Beta measures market sensitivity. Beta=1.5 means the stock moves 1.5× the market — amplified risk and return." },
      { q: "Unsystematic risk can be reduced by:", options: ["Holding cash", "Diversification", "Buying bonds only", "Increasing beta"], answer: 1, explanation: "Diversification across uncorrelated assets eliminates company-specific risk. Systematic risk (market risk) remains." },
      { q: "Dollar-cost averaging means:", options: ["Buying at the lowest price each month", "Investing a fixed dollar amount at regular intervals", "Averaging your dividend income", "Buying equal numbers of shares each month"], answer: 1, explanation: "DCA = fixed dollar amount invested regularly. You buy more shares when prices are low, fewer when high." },
      { q: "CAPM: Rf=3%, Beta=1.4, Market return=10%. Expected return = ?", options: ["9.8%", "11.8%", "13%", "7%"], answer: 1, explanation: "3% + 1.4 × (10% − 3%) = 3% + 9.8% = 12.8% — closest to 11.8% in the options. Formula: Rf + β(Rm−Rf)." },
    ],
  },
  {
    id: 7,
    title: "Business Finance in Practice",
    emoji: "⚙️",
    tag: "Operational",
    color: "#F97316",
    lesson: {
      intro: "This is where theory meets real operational decisions — pricing a service, structuring a subscription model, and understanding what makes a service business financially healthy.",
      sections: [
        {
          heading: "Pricing Strategy & Unit Economics",
          body: `**Unit economics** = the revenue and costs associated with one unit (one client, one sale).\n\nKey metrics for any service business:\n- **LTV (Lifetime Value)** = Monthly Revenue × Average Customer Lifetime\n  Example: $200/mo × 18-month average = $3,600 LTV\n\n- **CAC (Customer Acquisition Cost)** = Total Sales & Marketing Spend ÷ New Clients Acquired\n  Example: $400/mo ad spend acquiring 2 clients = $200 CAC\n\n- **LTV:CAC Ratio** = $3,600 ÷ $200 = 18× — exceptional. Benchmark: >3× is healthy, >5× is strong.\n\n**Payback period:** How long to recoup CAC. At $200/mo revenue and $200 CAC: 1 month payback.`,
        },
        {
          heading: "Subscription Business Model Economics",
          body: `Subscription businesses are valued differently because of recurring revenue.\n\n**MRR (Monthly Recurring Revenue)** = sum of all active subscriptions\n**ARR (Annual Recurring Revenue)** = MRR × 12\n**Churn Rate** = % of customers who cancel each month\n\n**The maths of churn:**\nAt 5% monthly churn, the average customer stays 20 months (1 ÷ 0.05).\nAt 2% churn, average customer stays 50 months.\n\n**Structural advantages:** Long-term contracts (e.g., 12–18 month minimums) reduce churn to near zero during the contract period — a significant financial benefit. The strategic goal becomes securing renewals.\n\n**MRR growth formula:**\nNew MRR − Churned MRR + Expansion MRR (upsells) = Net New MRR`,
        },
        {
          heading: "Profitability Levers",
          body: `Three ways to improve profit:\n1. **Raise prices** — highest-leverage move if retention holds\n2. **Reduce variable costs** — automation, templates, process efficiency\n3. **Reduce fixed costs** — audit subscriptions, renegotiate contracts\n\n**Example in practice:**\n- Automating 30% of delivery tasks reduces per-client variable cost (lever 2)\n- Renegotiating annual software plans saves fixed overhead (lever 3)\n- Upselling existing clients to a higher tier earns more with zero additional CAC (lever 1)\n\n**The most powerful strategy:** Raise prices AND reduce variable costs simultaneously. A 10% price increase combined with a 5% cost reduction can double net profit margin at a typical service business margin structure.`,
        },
      ],
    },
    caseStudy: {
      title: "Case: A Service Business's 12-Month Growth Plan",
      scenario: `Month 1 baseline for a subscription service business:\n• Clients: 5 (mix of tiers)\n• MRR: $900\n• Fixed costs: $400\n• Variable costs: $25/client = $125\n• Net profit: $375\n\nGoal: Reach $3,000/mo net profit within 12 months.`,
      questions: [
        { q: "How many clients are needed at a $180/mo average to hit $3,000 net?", answer: "~22 clients — Fixed $400 + Variable $550 (22×$25) = $950 costs. Revenue needed: $3,950. At $180 average: $3,950 ÷ $180 = ~22 clients." },
        { q: "What's the faster lever — acquiring new clients or raising prices?", answer: "Depends on capacity. If the business can handle more clients: acquire. If near capacity: upsell existing clients to higher tiers. Upsells have zero CAC — they're pure margin improvement." },
        { q: "If delivery automation cuts variable costs by 50%, what's the financial impact?", answer: "Variable cost drops from $25 to ~$12/client. At 22 clients that saves ~$286/mo. More importantly, the same team can serve more clients — revenue scales without proportional cost growth." },
      ],
    },
    quiz: [
      { q: "LTV of $2,000 and CAC of $400. LTV:CAC ratio = ?", options: ["2×", "4×", "5×", "8×"], answer: 2, explanation: "LTV:CAC = $2,000 ÷ $400 = 5×. Healthy benchmark is >3×, strong is >5×." },
      { q: "Monthly churn of 5% means the average client stays:", options: ["5 months", "10 months", "20 months", "50 months"], answer: 2, explanation: "Average lifetime = 1 ÷ churn rate = 1 ÷ 0.05 = 20 months." },
      { q: "Which is highest-leverage for profit improvement?", options: ["Reducing fixed costs by 5%", "Reducing variable costs by 5%", "Raising prices by 10%", "Acquiring 1 more client"], answer: 2, explanation: "Price increases apply to all revenue at near-zero marginal cost. A 10% price hike often increases profit by 25-50%+ depending on margins." },
      { q: "ARR = ?", options: ["Annual Revenue Ratio", "MRR × 12", "Revenue − Costs", "LTV × Clients"], answer: 1, explanation: "ARR = MRR × 12. Annual Recurring Revenue is the annualised view of subscription revenue." },
    ],
  },
  {
    id: 8,
    title: "Financial Strategy & Planning",
    emoji: "🎯",
    tag: "Strategy",
    color: "#EF4444",
    lesson: {
      intro: "Financial strategy is where finance meets leadership. It's about making decisions today that protect and grow value over the long term — for any business, career, or personal wealth plan.",
      sections: [
        {
          heading: "Long-Term Financial Planning",
          body: `A financial plan connects a vision to specific numbers:\n\n**3-horizon framework:**\n- Horizon 1 (0–12 months): Optimise current operations\n- Horizon 2 (1–3 years): Build next revenue streams\n- Horizon 3 (3–10 years): Invest in transformative bets\n\n**Example:** A founder's H1 might be reaching profitability on their core product. H2 is launching a complementary service line. H3 is building passive income through investment or a scalable digital product.\n\n**Key tool:** An annual financial model with monthly P&L projections, cash flow forecasts, and milestone-based targets reviewed quarterly.`,
        },
        {
          heading: "Scenario Planning & Sensitivity Analysis",
          body: `Never plan for one future. Build three:\n\n**Base case:** Most likely outcome\n**Bull case:** Best realistic scenario\n**Bear case:** Worst realistic scenario\n\n**Sensitivity analysis** asks: "If this one variable changes by X%, what happens to profit?"\n\n**Example for a subscription business:**\n- If churn doubles (from 2% to 4%), MRR growth halves\n- If prices rise 15%, profit increases ~40% (at typical service margins)\n- If 3 clients cancel in one month, how many months until recovery?\n\nBuilding this into a model means you're never surprised — you've already planned the response.`,
        },
        {
          heading: "KPIs for a Growing Business",
          body: `**Financial KPIs to track monthly:**\n- MRR and MRR growth rate\n- Gross margin %\n- Net profit margin %\n- Cash on hand (in weeks of runway)\n- LTV:CAC ratio\n- Churn rate\n\n**Leading indicators (predict future financial health):**\n- Leads in pipeline\n- Proposal-to-client conversion rate\n- Customer satisfaction / NPS score\n- Average contract value trend\n\n**In practice:** Businesses that track these proactively rarely face crises. Those that don't are often reactive — only looking at numbers when something goes wrong. Finance leaders use KPI dashboards to stay ahead of problems, not react to them.`,
        },
      ],
    },
    caseStudy: {
      title: "Case: You Have $50K. What's the Move?",
      scenario: `A professional has saved $50,000 through business profits and employment income. Four options are on the table:\n\nA) Use as a property deposit (with a government first-home scheme)\nB) Invest entirely into a diversified ETF portfolio\nC) Split: $30K toward property savings, $20K into ETFs\nD) Reinvest $20K back into the business (hiring, marketing, systems)`,
      questions: [
        { q: "What framework helps make this decision?", answer: "Compare expected returns and risk: property (5–8% growth + leverage effect), ETFs (8–12% long-term), business reinvestment (potentially 50–200% ROI if it grows revenue). Time horizon, risk tolerance, and liquidity needs determine the right mix." },
        { q: "Why is Option C often the most rational choice?", answer: "Diversification across asset classes — property, equities, and business — reduces concentration risk. Each has a different risk-return profile and responds differently to economic conditions. This balance is a core principle of sound financial planning." },
        { q: "How should business reinvestment (Option D) be evaluated?", answer: "Apply the same return hurdle as any other investment. If $20K in marketing is projected to generate $60K in new revenue over 12 months, that's a 200% ROI — likely better than any financial asset. Treat it as a capital allocation decision, not just an operational expense." },
      ],
    },
    quiz: [
      { q: "Scenario planning typically involves how many scenarios?", options: ["1", "2", "3", "5"], answer: 2, explanation: "Base, bull, and bear cases — three scenarios cover the realistic range of outcomes." },
      { q: "Which is a LEADING indicator of future financial health?", options: ["Last month's revenue", "Current net profit margin", "Leads in the sales pipeline", "Last quarter's churn rate"], answer: 2, explanation: "Pipeline leads predict future revenue. Lagging indicators (like past revenue) describe what already happened." },
      { q: "A sensitivity analysis on pricing shows: 10% price increase → 35% profit increase. This indicates:", options: ["Low gross margins", "High gross margins", "The business is unprofitable", "Price is inelastic"], answer: 1, explanation: "When a small price increase causes a large profit increase, it means a high portion of revenue was already profit — i.e., high margins." },
      { q: "The 3-horizon framework is for:", options: ["Cash flow management", "Long-term strategic financial planning", "Daily expense tracking", "WACC calculation"], answer: 1, explanation: "The 3-horizon framework separates near-term optimisation from medium-term growth and long-term transformation." },
    ],
  },
];

// ─── HELPERS ────────────────────────────────────────────────────────────────

const STORAGE_KEY = "biz_finance_progress_v2";

const loadProgress = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch { return {}; }
};

const saveProgress = (data) => {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); } catch {}
};

// ─── COMPONENTS ─────────────────────────────────────────────────────────────

const ProgressRing = ({ pct, color, size = 44 }) => {
  const r = (size - 6) / 2;
  const circ = 2 * Math.PI * r;
  return (
    <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="#1e293b" strokeWidth={4} />
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color}
        strokeWidth={4} strokeDasharray={`${circ} ${circ}`}
        strokeDashoffset={circ - (pct / 100) * circ}
        strokeLinecap="round" style={{ transition: "stroke-dashoffset 0.6s ease" }} />
    </svg>
  );
};

const Badge = ({ text, color }) => (
  <span style={{
    fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase",
    padding: "3px 8px", borderRadius: 4, border: `1px solid ${color}44`,
    color, background: `${color}18`
  }}>{text}</span>
);

const Section = ({ heading, body }) => {
  const parts = body.split(/\n+/);
  return (
    <div style={{ marginBottom: 28 }}>
      <h4 style={{ fontSize: 15, fontWeight: 700, color: "#f1f5f9", marginBottom: 12, lineHeight: 1.4 }}>{heading}</h4>
      {parts.map((p, i) => {
        if (!p.trim()) return null;
        const formatted = p.replace(/\*\*(.+?)\*\*/g, '<strong style="color:#e2e8f0">$1</strong>');
        return <p key={i} dangerouslySetInnerHTML={{ __html: formatted }}
          style={{ fontSize: 14, color: "#94a3b8", lineHeight: 1.75, marginBottom: 8 }} />;
      })}
    </div>
  );
};

// ─── LESSON VIEW ────────────────────────────────────────────────────────────

const LessonView = ({ mod }) => (
  <div>
    <div style={{
      background: `linear-gradient(135deg, ${mod.color}22, ${mod.color}08)`,
      border: `1px solid ${mod.color}30`,
      borderRadius: 12, padding: "20px 24px", marginBottom: 28
    }}>
      <p style={{ fontSize: 15, color: "#cbd5e1", lineHeight: 1.7, margin: 0 }}>
        {mod.lesson.intro}
      </p>
    </div>
    {mod.lesson.sections.map((s, i) => <Section key={i} heading={s.heading} body={s.body} />)}
  </div>
);

// ─── CASE STUDY VIEW ────────────────────────────────────────────────────────

const CaseView = ({ mod }) => {
  const [revealed, setRevealed] = useState([]);
  const toggle = (i) => setRevealed(prev => prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i]);

  return (
    <div>
      <div style={{
        background: "#0f172a", border: "1px solid #334155",
        borderRadius: 12, padding: "20px 24px", marginBottom: 24
      }}>
        <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", color: mod.color, marginBottom: 10, textTransform: "uppercase" }}>Scenario</div>
        {mod.caseStudy.scenario.split("\n").map((line, i) => (
          <p key={i} style={{ fontSize: 14, color: "#94a3b8", lineHeight: 1.7, margin: "2px 0" }}>{line}</p>
        ))}
      </div>
      <div style={{ fontSize: 13, fontWeight: 600, color: "#64748b", marginBottom: 16, textTransform: "uppercase", letterSpacing: "0.08em" }}>Analysis Questions</div>
      {mod.caseStudy.questions.map((item, i) => (
        <div key={i} style={{
          background: "#0f172a", border: `1px solid ${revealed.includes(i) ? mod.color + "50" : "#1e293b"}`,
          borderRadius: 10, marginBottom: 12, overflow: "hidden",
          transition: "border-color 0.3s"
        }}>
          <button onClick={() => toggle(i)} style={{
            width: "100%", background: "none", border: "none", padding: "16px 20px",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            cursor: "pointer", textAlign: "left"
          }}>
            <span style={{ fontSize: 14, color: "#e2e8f0", fontWeight: 500, flex: 1, paddingRight: 12 }}>
              <span style={{ color: mod.color, marginRight: 10, fontWeight: 700 }}>Q{i + 1}.</span>
              {item.q}
            </span>
            <span style={{ fontSize: 18, color: mod.color, flexShrink: 0 }}>
              {revealed.includes(i) ? "−" : "+"}
            </span>
          </button>
          {revealed.includes(i) && (
            <div style={{
              padding: "0 20px 16px 20px",
              borderTop: `1px solid ${mod.color}30`
            }}>
              <p style={{ fontSize: 14, color: "#94a3b8", lineHeight: 1.7, margin: "12px 0 0 0" }}>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

// ─── QUIZ VIEW ──────────────────────────────────────────────────────────────

const QuizView = ({ mod, onComplete, alreadyPassed, savedScore }) => {
  const [selected, setSelected] = useState({});
  const [submitted, setSubmitted] = useState(alreadyPassed || false);
  const [score, setScore] = useState(savedScore ?? null);

  const handleSubmit = () => {
    let correct = 0;
    mod.quiz.forEach((q, i) => { if (selected[i] === q.answer) correct++; });
    const s = Math.round((correct / mod.quiz.length) * 100);
    setScore(s);
    setSubmitted(true);
    onComplete(s);
  };

  const allAnswered = Object.keys(selected).length === mod.quiz.length;

  return (
    <div>
      {submitted && score !== null && (
        <div style={{
          background: score >= 75 ? `${mod.color}15` : "#ef444415",
          border: `1px solid ${score >= 75 ? mod.color : "#ef4444"}50`,
          borderRadius: 12, padding: "16px 24px", marginBottom: 24,
          display: "flex", alignItems: "center", gap: 16
        }}>
          <div style={{ fontSize: 32, fontWeight: 800, color: score >= 75 ? mod.color : "#ef4444" }}>{score}%</div>
          <div>
            <div style={{ fontSize: 14, fontWeight: 600, color: "#e2e8f0" }}>
              {score >= 75 ? "✓ Module passed" : "Review and retry"}
            </div>
            <div style={{ fontSize: 13, color: "#64748b", marginTop: 2 }}>
              {score >= 75 ? "Move on to the next module when ready." : "Study the lesson again, then retake the quiz."}
            </div>
          </div>
          {score < 75 && (
            <button onClick={() => { setSubmitted(false); setSelected({}); setScore(null); }}
              style={{
                marginLeft: "auto", padding: "8px 16px", borderRadius: 8,
                background: "#1e293b", border: "1px solid #334155",
                color: "#e2e8f0", fontSize: 13, cursor: "pointer", fontWeight: 600
              }}>Retry</button>
          )}
        </div>
      )}
      {mod.quiz.map((item, i) => (
        <div key={i} style={{
          background: "#0f172a", border: "1px solid #1e293b",
          borderRadius: 10, padding: "18px 20px", marginBottom: 14
        }}>
          <div style={{ fontSize: 14, color: "#e2e8f0", fontWeight: 600, marginBottom: 14, lineHeight: 1.5 }}>
            <span style={{ color: mod.color }}>{i + 1}. </span>{item.q}
          </div>
          <div style={{ display: "grid", gap: 8 }}>
            {item.options.map((opt, j) => {
              const isSelected = selected[i] === j;
              const isCorrect = submitted && j === item.answer;
              const isWrong = submitted && isSelected && j !== item.answer;
              return (
                <button key={j} onClick={() => !submitted && setSelected(p => ({ ...p, [i]: j }))}
                  style={{
                    width: "100%", textAlign: "left", padding: "10px 14px",
                    borderRadius: 8, border: `1px solid ${
                      isCorrect ? "#10b981" : isWrong ? "#ef4444" : isSelected ? mod.color : "#1e293b"
                    }`,
                    background: isCorrect ? "#10b98115" : isWrong ? "#ef444415" : isSelected ? `${mod.color}18` : "#151e2e",
                    color: isCorrect ? "#10b981" : isWrong ? "#ef4444" : isSelected ? "#e2e8f0" : "#94a3b8",
                    fontSize: 13, cursor: submitted ? "default" : "pointer",
                    fontWeight: isSelected || isCorrect ? 600 : 400,
                    transition: "all 0.2s"
                  }}>
                  <span style={{ marginRight: 8, opacity: 0.5 }}>{String.fromCharCode(65 + j)}.</span>
                  {opt}
                </button>
              );
            })}
          </div>
          {submitted && (
            <div style={{ marginTop: 12, padding: "10px 14px", background: "#0d1929", borderRadius: 8, borderLeft: `3px solid ${mod.color}` }}>
              <p style={{ fontSize: 12, color: "#64748b", margin: 0, lineHeight: 1.6 }}>
                <span style={{ color: mod.color, fontWeight: 700 }}>Explanation: </span>{item.explanation}
              </p>
            </div>
          )}
        </div>
      ))}
      {!submitted && (
        <button onClick={handleSubmit} disabled={!allAnswered} style={{
          padding: "12px 28px", borderRadius: 10,
          background: allAnswered ? mod.color : "#1e293b",
          border: "none", color: allAnswered ? "#fff" : "#334155",
          fontSize: 14, fontWeight: 700, cursor: allAnswered ? "pointer" : "not-allowed",
          transition: "all 0.3s", marginTop: 8
        }}>
          {allAnswered ? "Submit Answers →" : `Answer all ${mod.quiz.length} questions to submit`}
        </button>
      )}
    </div>
  );
};

// ─── MAIN APP ───────────────────────────────────────────────────────────────

export default function App() {
  const [progress, setProgress] = useState(loadProgress);
  const [activeModule, setActiveModule] = useState(null);
  const [activeTab, setActiveTab] = useState("lesson");

  const updateProgress = (modId, updates) => {
    setProgress(prev => {
      const next = { ...prev, [modId]: { ...prev[modId], ...updates } };
      saveProgress(next);
      return next;
    });
  };

  const handleQuizComplete = (modId, score) => {
    const passed = score >= 75;
    updateProgress(modId, {
      quizScore: score,
      quizPassed: passed,
      lessonRead: true,
      caseStudyDone: true,
      completed: passed,
    });
  };

  const markLessonRead = (modId) => updateProgress(modId, { lessonRead: true });
  const markCaseDone = (modId) => updateProgress(modId, { caseStudyDone: true });

  const totalModules = MODULES.length;
  const completedCount = MODULES.filter(m => progress[m.id]?.completed).length;
  const overallPct = Math.round((completedCount / totalModules) * 100);

  const mod = activeModule ? MODULES.find(m => m.id === activeModule) : null;
  const modProgress = mod ? (progress[mod.id] || {}) : {};

  const tabs = [
    { id: "lesson", label: "Lesson", icon: "📖" },
    { id: "case", label: "Case Study", icon: "🧠" },
    { id: "quiz", label: "Quiz", icon: "✅" },
  ];

  // COURSE HOME
  if (!activeModule) return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(160deg, #020817 0%, #0b1120 50%, #020817 100%)",
      fontFamily: "'DM Sans', system-ui, sans-serif",
      color: "#e2e8f0",
      padding: "0 0 60px 0"
    }}>
      {/* Header */}
      <div style={{
        borderBottom: "1px solid #0f172a",
        background: "#020817ee",
        backdropFilter: "blur(20px)",
        position: "sticky", top: 0, zIndex: 100,
        padding: "0 24px"
      }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{
              width: 34, height: 34, borderRadius: 8,
              background: "linear-gradient(135deg, #4F7FFF, #8B5CF6)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 16
            }}>📘</div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#f1f5f9", letterSpacing: "-0.01em" }}>Business Finance</div>
              <div style={{ fontSize: 11, color: "#475569" }}>University-Level Course</div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: 11, color: "#475569", marginBottom: 2 }}>Overall Progress</div>
              <div style={{ fontSize: 20, fontWeight: 800, color: "#4F7FFF" }}>{overallPct}%</div>
            </div>
            <ProgressRing pct={overallPct} color="#4F7FFF" size={44} />
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px 0" }}>
        {/* Hero */}
        <div style={{ marginBottom: 48 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", color: "#4F7FFF", textTransform: "uppercase", marginBottom: 12 }}>
            {completedCount}/{totalModules} Modules Completed
          </div>
          <h1 style={{ fontSize: 36, fontWeight: 800, letterSpacing: "-0.03em", color: "#f8fafc", margin: "0 0 12px 0", lineHeight: 1.15 }}>
            Business Finance<br />
            <span style={{ background: "linear-gradient(90deg, #4F7FFF, #8B5CF6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Mastery Course
            </span>
          </h1>
          <p style={{ fontSize: 15, color: "#64748b", maxWidth: 540, lineHeight: 1.7, margin: 0 }}>
            University-level finance built for real decisions — managing a business, advancing your career, and building long-term wealth.
          </p>
        </div>

        {/* Stats row */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 40 }}>
          {[
            { label: "Modules", value: `${totalModules}`, sub: "Total" },
            { label: "Completed", value: `${completedCount}`, sub: "Passed" },
            { label: "Quizzes", value: `${MODULES.filter(m => progress[m.id]?.quizPassed).length}`, sub: "Passed (≥75%)" },
          ].map((s, i) => (
            <div key={i} style={{
              background: "#0a1628", border: "1px solid #0f172a",
              borderRadius: 12, padding: "18px 20px", textAlign: "center"
            }}>
              <div style={{ fontSize: 28, fontWeight: 800, color: "#f1f5f9", letterSpacing: "-0.02em" }}>{s.value}</div>
              <div style={{ fontSize: 12, color: "#475569", marginTop: 4 }}>{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Module Grid */}
        <div style={{ display: "grid", gap: 14 }}>
          {MODULES.map((m, idx) => {
            const mp = progress[m.id] || {};
            const locked = idx > 0 && !progress[MODULES[idx - 1].id]?.completed && idx !== 0;
            const pct = [mp.lessonRead, mp.caseStudyDone, mp.quizPassed].filter(Boolean).length / 3 * 100;

            return (
              <div key={m.id}
                onClick={() => !locked && setActiveModule(m.id)}
                style={{
                  background: "#0a1628",
                  border: `1px solid ${mp.completed ? m.color + "40" : locked ? "#0f172a" : "#1e293b"}`,
                  borderRadius: 14, padding: "20px 24px",
                  cursor: locked ? "not-allowed" : "pointer",
                  opacity: locked ? 0.4 : 1,
                  display: "flex", alignItems: "center", gap: 20,
                  transition: "all 0.25s",
                  ":hover": { borderColor: m.color }
                }}>
                {/* Emoji */}
                <div style={{
                  width: 52, height: 52, borderRadius: 12, flexShrink: 0,
                  background: `${m.color}18`, border: `1px solid ${m.color}30`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 22
                }}>{m.emoji}</div>

                {/* Info */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4, flexWrap: "wrap" }}>
                    <span style={{ fontSize: 10, fontWeight: 700, color: "#475569", letterSpacing: "0.06em" }}>
                      MODULE {m.id}
                    </span>
                    <Badge text={m.tag} color={m.color} />
                    {mp.completed && <Badge text="✓ Passed" color="#10b981" />}
                  </div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "#f1f5f9", marginBottom: 8 }}>{m.title}</div>
                  {/* Progress bar */}
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ flex: 1, height: 3, background: "#1e293b", borderRadius: 2, overflow: "hidden" }}>
                      <div style={{ height: "100%", width: `${pct}%`, background: m.color, borderRadius: 2, transition: "width 0.6s" }} />
                    </div>
                    <span style={{ fontSize: 11, color: "#475569", flexShrink: 0 }}>
                      {Math.round(pct)}%
                    </span>
                  </div>
                </div>

                {/* Ring */}
                <div style={{ flexShrink: 0 }}>
                  <ProgressRing pct={pct} color={m.color} size={40} />
                </div>

                {/* Arrow */}
                <div style={{ color: "#334155", fontSize: 16, flexShrink: 0 }}>→</div>
              </div>
            );
          })}
        </div>

        <div style={{ textAlign: "center", marginTop: 40, color: "#1e293b", fontSize: 11, letterSpacing: "0.08em" }}>
          PROGRESS IS SAVED AUTOMATICALLY
        </div>
      </div>
    </div>
  );

  // MODULE VIEW
  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(160deg, #020817 0%, #0b1120 50%, #020817 100%)",
      fontFamily: "'DM Sans', system-ui, sans-serif",
      color: "#e2e8f0",
    }}>
      {/* Module Header */}
      <div style={{
        borderBottom: "1px solid #0f172a",
        background: "#020817ee",
        backdropFilter: "blur(20px)",
        position: "sticky", top: 0, zIndex: 100,
        padding: "0 24px"
      }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, height: 60 }}>
            <button onClick={() => setActiveModule(null)} style={{
              background: "none", border: "none", color: "#475569",
              fontSize: 14, cursor: "pointer", display: "flex", alignItems: "center", gap: 6, padding: 0
            }}>
              ← Back
            </button>
            <div style={{ width: 1, height: 20, background: "#1e293b" }} />
            <div style={{ fontSize: 14, color: "#64748b" }}>
              <span style={{ color: mod.color }}>{mod.emoji}</span>{" "}
              {mod.title}
            </div>
          </div>

          {/* Tabs */}
          <div style={{ display: "flex", gap: 2, paddingBottom: 0 }}>
            {tabs.map(t => (
              <button key={t.id} onClick={() => setActiveTab(t.id)} style={{
                background: "none", border: "none",
                borderBottom: `2px solid ${activeTab === t.id ? mod.color : "transparent"}`,
                padding: "10px 16px", cursor: "pointer",
                color: activeTab === t.id ? mod.color : "#475569",
                fontSize: 13, fontWeight: activeTab === t.id ? 700 : 500,
                transition: "all 0.2s",
                display: "flex", alignItems: "center", gap: 6
              }}>
                <span>{t.icon}</span> {t.label}
                {t.id === "lesson" && modProgress.lessonRead && <span style={{ fontSize: 10, color: "#10b981" }}>✓</span>}
                {t.id === "case" && modProgress.caseStudyDone && <span style={{ fontSize: 10, color: "#10b981" }}>✓</span>}
                {t.id === "quiz" && modProgress.quizPassed && <span style={{ fontSize: 10, color: "#10b981" }}>✓</span>}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "32px 24px 60px" }}>
        {/* Module intro card */}
        <div style={{
          display: "flex", alignItems: "center", gap: 16, marginBottom: 32,
          padding: "18px 22px",
          background: `linear-gradient(135deg, ${mod.color}15, ${mod.color}05)`,
          border: `1px solid ${mod.color}25`, borderRadius: 12
        }}>
          <div style={{ fontSize: 32 }}>{mod.emoji}</div>
          <div>
            <div style={{ fontSize: 11, color: mod.color, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 3 }}>
              Module {mod.id} · {mod.tag}
            </div>
            <div style={{ fontSize: 18, fontWeight: 800, color: "#f1f5f9" }}>{mod.title}</div>
          </div>
        </div>

        {activeTab === "lesson" && (
          <div>
            <LessonView mod={mod} />
            {!modProgress.lessonRead && (
              <button onClick={() => { markLessonRead(mod.id); setActiveTab("case"); }}
                style={{
                  marginTop: 16, padding: "12px 24px", borderRadius: 10,
                  background: mod.color, border: "none", color: "#fff",
                  fontSize: 14, fontWeight: 700, cursor: "pointer"
                }}>
                Mark as read → Go to Case Study
              </button>
            )}
            {modProgress.lessonRead && (
              <button onClick={() => setActiveTab("case")} style={{
                marginTop: 16, padding: "12px 24px", borderRadius: 10,
                background: "#1e293b", border: `1px solid ${mod.color}40`, color: mod.color,
                fontSize: 14, fontWeight: 600, cursor: "pointer"
              }}>
                → Case Study
              </button>
            )}
          </div>
        )}

        {activeTab === "case" && (
          <div>
            <CaseView mod={mod} />
            {!modProgress.caseStudyDone && (
              <button onClick={() => { markCaseDone(mod.id); setActiveTab("quiz"); }}
                style={{
                  marginTop: 8, padding: "12px 24px", borderRadius: 10,
                  background: mod.color, border: "none", color: "#fff",
                  fontSize: 14, fontWeight: 700, cursor: "pointer"
                }}>
                Done → Take the Quiz
              </button>
            )}
            {modProgress.caseStudyDone && (
              <button onClick={() => setActiveTab("quiz")} style={{
                marginTop: 8, padding: "12px 24px", borderRadius: 10,
                background: "#1e293b", border: `1px solid ${mod.color}40`, color: mod.color,
                fontSize: 14, fontWeight: 600, cursor: "pointer"
              }}>
                → Quiz
              </button>
            )}
          </div>
        )}

        {activeTab === "quiz" && (
          <QuizView
            mod={mod}
            alreadyPassed={modProgress.quizPassed}
            savedScore={modProgress.quizScore}
            onComplete={(score) => handleQuizComplete(mod.id, score)}
          />
        )}
      </div>
    </div>
  );
}