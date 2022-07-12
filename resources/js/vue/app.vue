<template>
    <div class="todoListContainer">
        <div class="heading">
            <h2 id="title">Todo List</h2>
            <add-item-form />
        </div>
        <list-view />
    </div>
</template>

<script>
import addItemForm from './addItemForm'
import listItem from './listItem'

export default {
    addItemForm,
    listItem
}
</script>

<style scoped>
.todoListContainer {
    width: 350px;
    margin: auto;
}

.heading {
    background: #e6e6e6;
    margin: 10px;
}

#title {
    text-align: center;
}

</style>
