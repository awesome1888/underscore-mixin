import __ from 'underscore';
import clone from 'clone';
import deepEqual from 'deep-equal';

__.mixin({
    /**
     * Check if the argument is a string and it is not empty
     * @param {*} value
     * @returns {boolean}
     */
    isStringNotEmpty: function(value)
    {
        return __.isString(value) && value.length > 0;
    },

    isStringNotEmptyTrimmed: function(value)
    {
        if (!__.isString(value))
        {
            return false;
        }

        value = value.trim();

        return !!value.length;
    },

    /**
     * Check if the argument is an array and it is not empty
     * @param {*} value
     * @returns {boolean}
     */
    isArrayNotEmpty: function(value)
    {
        return __.isArray(value) && value.length > 0;
    },

    /**
     * Check if the argument is an object and it has some own keys
     * @param {*} value
     * @returns {boolean}
     */
    isObjectNotEmpty: function(value)
    {
        return __.isObject(value) && Object.keys(value).length > 0;
    },

    isPlainObject(value)
    {
        return __.isObject(value) && value.constructor === Object;
    },

    isExist(value)
    {
        return !__.isUndefined(value) && !__.isNull(value);
    },

    makeMap(data, field, unsetKey = false)
    {
        if (__.isArrayNotEmpty(data))
        {
            return data.reduce((result, item) => {
                const key = item[field];
                if (unsetKey)
                {
                    delete item[field];
                }
                result[key] = item;
                return result;
            }, {});
        }

        return {};
    },

    /**
     * Copyright Flavio Freitas
     * @param obj
     * @param path
     * @returns {*}
     */
    getValue: function(obj, path)
    {
        if (typeof obj === 'undefined' || obj === null) return;

        path = path.split(/[\.\[\]\"\']{1,2}/); // eslint-disable-line
        for (var i = 0, l = path.length; i < l; i += 1)
        {
            if (path[i] !== '')
            {
                obj = obj[path[i]];
                if (typeof obj === 'undefined' || obj === null) return;
            }
        }

        return obj; //eslint-disable-line
    },

    lCFirst: function(value)
    {
        if (__.isStringNotEmpty(value))
        {
            return value.substr(0, 1).toLowerCase() + value.substr(1);
        }

        return '';
    },

    uCFirst: function(value)
    {
        if (__.isStringNotEmpty(value))
        {
            return value.substr(0, 1).toUpperCase() + value.substr(1);
        }

        return '';
    },

    intersectKeys: function(one, two)
    {
        if (!__.isObject(one))
        {
            return one;
        }
        if (!__.isObjectNotEmpty(two))
        {
            return {};
        }

        return __.intersection(
            Object.keys(one),
            Object.keys(two)
        ).reduce(function(result, key) {
            result[key] = one[key];
            return result;
        }, {});
    },

    deepClone: function(value)
    {
        return clone(value, false);
    },

    deepEqual: function(one, two)
    {
        return deepEqual(one, two);
    },
});

module.exports = __;
