package com.robert.enums;

public enum Status {
    ACTIVE("Ativo"), INACTIVE("Inativo");

    private String value;

    private Status(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }

    //toString
    @Override
    public String toString() {
        return value;
    }
}
