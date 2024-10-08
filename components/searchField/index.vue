<template>
    <div class="flex flex-row mt-5 px-5">
        <input
            class="bg-blue-200 w-full p-2 rounded-md rounded-r-none shadow-inner shadow-slate-500 focus:shadow-inner focus:shadow-black"
            v-model="searchValue"
            placeholder="Search"
            type="text"
            @input="() => handleInput(searchValue)"
            @change="handleChange"
        />
        <button
            class="rounded-none bg-blue-200 w-6 shadow-inner hover:bg-blue-100 transition-all duration-300"
            @click="handleBack"
        >
            <
        </button>
        <button
            class="rounded-md rounded-l-none bg-blue-200 w-6 shadow-inner hover:bg-blue-100 transition-all duration-300"
            @click="handleForward"
        >
            >
        </button>
    </div>
</template>
<script setup lang="ts">
const searchValue = ref<string>('');

interface Emits {
    (e: 'update', value: string): void;
}

const emit = defineEmits<Emits>();

// ctrl+z ctrl+y implementation
const changesHistory = ref<string[]>(['']);
const historyIndex = ref<number | null>(null);
const maxHistoryLength = ref<number>(50);

const handleInput = (searchValue: string) => {
    console.log(changesHistory.value)
    emit('update', searchValue);
    if (historyIndex.value !== null) {
        console.log(historyIndex.value)
        changesHistory.value = changesHistory.value.slice(
            0,
            historyIndex.value + 1
        );
        historyIndex.value = null;
    }
};

const handleChange = () => {
    console.log(changesHistory.value)
    if (
        searchValue.value !==
        changesHistory.value[changesHistory.value.length - 1]
    ) {
        changesHistory.value.push(searchValue.value);
        if (changesHistory.value.length > maxHistoryLength) {
            changesHistory.value.shift();
        }
    }
};

const handleBack = () => {
    console.log(changesHistory.value)
    if (historyIndex.value !== null && historyIndex.value > 0)
        --historyIndex.value;
    else if (historyIndex.value !== 0)
        historyIndex.value = changesHistory.value.length - 2;
    searchValue.value = changesHistory.value[historyIndex.value];
    emit('update', searchValue.value);
};

const handleForward = () => {
    console.log(changesHistory.value)
    if (
        historyIndex.value !== null &&
        historyIndex.value < changesHistory.value.length - 1
    ) {
        ++historyIndex.value;
        searchValue.value = changesHistory.value[historyIndex.value];
        emit('update', searchValue.value);
    }
};
</script>
