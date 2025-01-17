const ber    = require ('asn1-ber').Ber;
const assert = require('assert');
const snmp   = require('../');

describe('parseInt()', function() {
	describe('given a negative integer', function() {
		const writer = new ber.Writer();
		writer.writeInt(-3);
		const reader = new ber.Reader(writer.buffer);
		it('returns a negative integer', function() {
			assert.equal(-3, snmp.ObjectParser.readInt32(reader));
		});
	});
	describe('given a positive integer', function() {
		const writer = new ber.Writer();
		writer.writeInt(3245689);
		const reader = new ber.Reader(writer.buffer);
		it('returns a positive integer', function() {
			assert.equal(3245689, snmp.ObjectParser.readInt32(reader));
		});
	});
});

describe('parseUint()', function() {
	describe('given a positive integer', function() {
		const writer = new ber.Writer();
		writer.writeInt(3242425);
		const reader = new ber.Reader(writer.buffer);
		it('returns a positive integer', function() {
			assert.equal(3242425, snmp.ObjectParser.readUint32(reader));
		});
	});
	describe('given a negative integer', function() {
		const writer = new ber.Writer();
		writer.writeInt(-3);
		const reader = new ber.Reader(writer.buffer);
		it('returns a positive integer', function() {
			assert.equal(4294967293, snmp.ObjectParser.readUint32(reader));
		});
	});
	describe('given a large integer', function() {
		const writer = new ber.Writer();
		writer.writeInt(4294967294);
		const reader = new ber.Reader(writer.buffer);
		it('returns a positive integer', function() {
			assert.equal(4294967294, snmp.ObjectParser.readUint32(reader));
		});
	});
});
