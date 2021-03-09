import FormulateVueDatetime from './FormulateVueDatetime'

export default function FormulateVueDatetimePlugin(formulateInstance) {
    formulateInstance.extend({
        components: {
            FormulateVueDatetime,
        },
        library: {
            "vue-datetime": {
                classification: 'text',
                component: 'FormulateVueDatetime'
            },
        },
    })
}