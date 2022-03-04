<head>
  <title><?php echo $page->title(); ?></title>
<?php if (c::get('debug')) { ?>
  <!-- Development Scripts -->
<script type="module" src=" http://localhost:3000/@vite/client"></script>
<script type="module" src=" http://localhost:3000/index.js"></script>
<?php } else { ?>
  <!-- Production Scripts -->
<link rel="stylesheet" href="/public/dist/index.css">
<script type="module" crossorigin src="/public/dist/index.js"></script>
<?php }?>
</head>
