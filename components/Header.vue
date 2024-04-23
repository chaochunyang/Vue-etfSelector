<template>
  <nav class="navbar p-4 navbar-expand-md navbar-dark bg-dark">
    <div class="container" id="pageTop">
      <a class="navbar-brand" href="/">
        <img
          src="../public/favicon.png"
          class="mb-2 me-2"
          width="30"
          height="30"
          alt="..."
        />
        <b>eTFSELECTOR</b>
      </a>
      <button
        class="navbar-toggler"
        id="hamburger"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse border-start border-white border-2 ps-2"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav text-white">
          <li class="nav-item" id="nav-link1">
            <a class="nav-link" aria-current="page" href="/compare"
              >ETF 成分股比較</a
            >
          </li>
          <li class="nav-item" id="nav-link2">
            <a class="nav-link" href="/chart">ETF 報酬績效圖</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup></script>

<style lang="scss" scoped></style>
